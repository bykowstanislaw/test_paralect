
import React from 'react';
import './pagination.css'


const Pagination = ({ setTargetPage, reposQuantity, targetPage, prevpage, nextpage }) => {
  const pageNumbers = [];


  for (let i = targetPage; i <= Math.ceil((reposQuantity / 4) + 3); i++) {

    if (i === 1) {
      continue
    }
    if (i === 2) {
      continue
    }
    if (i === 3) {
      continue
    }


    else pageNumbers.push(i - 3)
    if (pageNumbers.length > 4) {
      break
    }
  }
  const paginate = number => setTargetPage(number);

  return (
    <nav>
      <div className='pagination'>
        {(reposQuantity) ? <a onClick={prevpage} href='#repositories'><img src="/images/vlevo.png" className="arrow left" alt='prev'></img></a>
          : <div></div>}
        {pageNumbers.map(number => (
          <span key={number} className='page-item'>

            {targetPage === number ?
              <a onClick={() => paginate(number)} href='#repositories' className='page-link active'>{number}</a>
              :
              <a onClick={() => paginate(number)} href='#repositories' className='page-link'>{number}</a>
            }
          </span>
        ))}
        {(reposQuantity) ? <a onClick={nextpage} href='#repositories'><img src="/images/vpravo.png" className="arrow right" alt='next'></img></a>
          : <div></div>}
      </div>
    </nav>
  );
};

export default Pagination;