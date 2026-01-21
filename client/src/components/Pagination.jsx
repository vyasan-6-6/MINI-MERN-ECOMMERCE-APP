
import { useProductContext } from '../contextApi/useProductContext'

const Pagination = () => {
    const {state,dispatch} = useProductContext();
  return (
    <div className='flex justify-center gap-2 mt-8'> 
        <button 
        disabled={state.page ===1}
        onClick={()=>dispatch({type:"SET_PAGE",payload:state.page-1})}
        className='px-4 py-2 border rounded disabled:opacity-50'
        >
            prev
        </button>
        {[...Array(state.pages).keys()].map((x)=>(
         <button key={x+1}
          onClick={()=>dispatch({type:"SET_PAGE",payload:x+1})}
         className={`px-4 py-2 border rounded ${state.page === x+1 ?"bg-blue-500 text-white": "" }`}
         >
            {x+1}
         </button>
        ))}
        <button disabled={state.page === state.pages}
         onClick={()=>dispatch({type:"SET_PAGE",payload:state.page+1})}
        className='px-4 py-2 border rounded disabled:opacity-50'
        >
            Next
        </button>
    </div>
  )
}

export default Pagination