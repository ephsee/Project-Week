import {useEffect, useState} from 'react'
import ResourceCard from './ResourceCard'

function Resources(){
    const [resourses, setResources] = useState([])
    useEffect(()=>{
        fetch("http://localhost:6001/facts")
        .then(r=>r.json())
        .then(setResources)
    }, [])
    console.log(resourses)
    return(
        <div>
            iframe goes here - more resources follow
            <ResourceCard resourses={resourses} />
        </div>
    )
}

export default Resources