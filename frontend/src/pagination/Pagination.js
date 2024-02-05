import React from 'react'
import { Button } from 'react-bootstrap';

function Pagination({totalEpisodes, episodesPerPage, setCurrentPage, currentPage}) {

  let pages = [];

  for (let page_number = 1; page_number <= Math.ceil(totalEpisodes/episodesPerPage); page_number++){
    pages.push(page_number);
  }

  return (
    <div>
      {
        pages.map((page, index) => {
          return <Button key={index} onClick={() => setCurrentPage(page)} className={page == currentPage ? 'active': ''}>{page}</Button>
        })
      }
    </div>
  )
}

export default Pagination
