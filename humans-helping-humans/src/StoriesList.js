import Story from './Story'
import {useState, useEffect} from 'react'

function StoriesList() {

    const [stories, setStories] = useState([])

    useEffect(()=>{
        fetch("http://localhost:6001/stories")
        .then(r=>r.json())
        .then(setStories)
    },[])

    console.log(stories)

    const storyCard = stories.map(story =>  <Story key={story.id} story={story}/>)

    // <Story />

    return (
        <div>
            {storyCard}
        </div>

    )
}

export default StoriesList
