
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GpusList() {
    const [gpusnames, setGpusnames] = useState([]);
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:5000/gpus/")
        .then(response => {
            setGpusnames({data: response.data})
            setLoading(false)
        })
        .catch((error) => {
            console.log(error);
            setHasError(true)
            setLoading(false)
          })
    })
    return (
        loading ? <div>Loading...</div> : hasError ? <div>Error occured.</div> :
        <div>
            <ul>
                {gpusnames.data.map((item) => {
                return <li>{item.title}</li>
                })}
            </ul>
            
        </div>
       
    )
}
export default GpusList;