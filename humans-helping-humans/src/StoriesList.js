import Story from './Story'
import {useState, useEffect} from 'react'
import NewStoryForm from './NewStoryForm'

function StoriesList() {

    const [stories, setStories] = useState([])

    const [showStories, setShowStories] = useState(true)

    function clickShow() {
        setShowStories(!showStories)
    }

    useEffect(()=>{

        const doTheFecth = new AbortController();

        fetch("http://localhost:6001/stories")
        .then(r=>r.json())
        .then(setStories)

        return () => {
            
        doTheFecth.abort();}

    },[])

    const storyCard = stories.map(story =>  <Story key={story.id} story={story}/>)

    return (
        <div>
            <hr></hr>
            <div onClick={clickShow}> {showStories ? ' CLICK ME TO ADD A STORY! ' : <NewStoryForm stories={stories} setStories={setStories}/>} </div>
            <hr></hr>
            <h3>Read User Stories</h3>
            
            {storyCard}

        </div>
    )
}

export default StoriesList
