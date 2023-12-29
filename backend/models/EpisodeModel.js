const mongoose = require('mongoose');
const RssParser = require('rss-parser');
const slugify = require('slugify');

const episodeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    episode_number: {
      type: Number,
      required: false
    },
    episode_season: {
      type: Number,
      required: false
    },
    pubDate: {
      type: Date,
      required: true
    },
    guid: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
)

episodeSchema.pre('validate', function(next){
  if(this.title){
    this.slug = slugify(this.title, {lower: true, strict: true})
  }

  next()
})
	
const Episode = mongoose.model('Episode', episodeSchema);
	
// Parse RSS Feed Code
//Create new instance
const parser = new RssParser();

const feedURL = "https://feeds.acast.com/public/shows/645ab7b22d07d3001179b88a";
	
//Fetch & parse the RSS feed
parser.parseURL(feedURL)
  .then(feed=> {
    feed.items.forEach(episode => {
      //Check if episode exists in the database
      Episode.find().then({guid: episode.guid }, (err, existingEpisode) => {
        if (err){
          console.error(err);
          return;
        }
        
        //If an episode does not exist in the database, add a new episode
        if(!existingEpisode){
          const newEpisode = new Episode({
            title: episode.title,
            description: episode.contentSnippet,
            link: episode.enclosure.url,
            duration: episode.itunes.duration,
            episode_number: episode.itunes.episode,
            episode_season: episode.itunes.season,
            pubDate: episode.pubDate,
            guid: episode.guid,
            image: episode.itunes.image,
            slug: episode.slug
          });
          newEpisode.save();
        }
      })
    })
  })
	
module.exports = Episode;