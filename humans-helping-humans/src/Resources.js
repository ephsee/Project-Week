import {useEffect, useState} from 'react'
import ResourceCard from './ResourceCard'

function Resources(){

    const [resourses, setResources] = useState([])

    useEffect(()=>{
        fetch("http://localhost:6001/facts")
        .then(r=>r.json())
        .then(setResources)
    }, [])

    return(
        <div>
            <div>
                <h3>Use These Resources On Your Journey</h3>
                <p>The Science of Gratitude and How to Build a Gratitude Practice | Huberman Lab Podcast #47</p>
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/KVjfFN89qvQ?start=551" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                <div>add website links here</div>
            </div>
            <ResourceCard resourses={resourses} />
        </div>
    )
}

export default Resources