import React from 'react'

const Pagination = ({currentPage, totoalUsers, paginate}) => {
  
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totoalUsers); i++){
    pageNumbers.push(i);
  }
  
    return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
            <li key={number} className={`page-item ${number === currentPage ? 'active': ''}`}>
                <a onClick={(e)=> {
                        e.preventDefault();
                        paginate(number)
                    }} 
                    href="!#" 
                    className='page-link'
                >
                    {number}
                </a>
            </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
