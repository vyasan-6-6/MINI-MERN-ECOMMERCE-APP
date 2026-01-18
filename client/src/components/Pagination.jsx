import React from 'react'
import { useProductContext } from '../contextApi/useProductContext'

const Pagination = () => {
    const {page,pages,setPage} = useProductContext();
  return (
    <div className='flex justify-center gap-2 mt-8'> 
        <button 
        disabled={page ===1}
        onClick={()=>setPage(page-1)}
        className='px-4 py-2 border rounded disabled:opacity-50'
        >
            prev
        </button>
        {[...Array(pages).keys()].map((x)=>(
         <button key={x+1}
         onClick={()=> setPage(x+1)}
         className={`px-4 py-2 border rounded ${page === x+1 ?"bg-blue-500 text-white": "" }`}
         >
            {x+1}
         </button>
        ))}
        <button disabled={page === pages}
        onClick={()=>setPage(page+1)}
        className='px-4 py-2 border rounded disabled:opacity-50'
        >
            Next
        </button>
    </div>
  )
}

export default Pagination