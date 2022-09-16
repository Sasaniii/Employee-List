import React, { useEffect } from 'react';
import Axios from 'axios'

function DetailsPage(){
    useEffect(() => {
        Axios.get(`/api/employee/employees_by_id?id=${Id}&type=single`)
           
            )

    }, [])
    return(
        
        <div>page of details</div>
    )
}

export default DetailsPage