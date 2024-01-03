const mongoose = require('mongoose');

const platformSchema = mongoose.Schema (
  {
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Platform = mongoose.model('Platform', platformSchema);

module.exports = Platform;