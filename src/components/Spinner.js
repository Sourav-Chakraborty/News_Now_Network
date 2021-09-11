import React from 'react'
import Loading from './ajax-loader.gif'
const Spinner=()=> {
  
        return (
            <div className="text-center">
                <img src={Loading} alt="loading" />
            </div>
        )
}


export default Spinner
