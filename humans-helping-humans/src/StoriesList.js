import Story from './Story'
import { useState, useEffect } from 'react'
import NewStoryForm from './NewStoryForm'
import "./assets/people.png"

const storyesLink = "http://localhost:6001/stories";

function StoriesList() {

    const [stories, setStories] = useState([])

    const [showStoriesForm, setShowStoriesForm] = useState(true)

    function clickShow() {
        setShowStoriesForm(!showStoriesForm)
    }

    console.log(stories)

    const makeNewStory = (story) => {

        fetch('http://localhost:6001/stories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(story),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                console.log(stories)

                getFetchStories();

            })
    }

    const getFetchStories = () => {
        fetch(storyesLink)
            .then(r => r.json())
            .then(data => setStories(data.reverse()))
    }

    function removeFecthStory(story) {
        fetch(storyesLink + "/" + story.id,
            { method: "DELETE" })
            .then(console.log)
        const cuttedStories = stories.filter(({ id }) => id !== story.id)
        setStories(cuttedStories);
        

    }

    function patchLikes(story, likes) {
        fetch(storyesLink + "/" + story.id, {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    likes: parseInt(likes)
                })

        }).then(r => r.json()).then(console.log)
    }

    useEffect(() => {

        const controller = new AbortController();

        getFetchStories();

        return () => {

            controller.abort();
        }

    }, [])

    const storyCard = stories.map(story => <Story
        key={story.name_of_person}
        story={story}
        removeFecthStory={removeFecthStory}
        patchLikes={patchLikes} />)

    return (
        <div className='makeSpace'>
            <div className='floatLeft'>
                <div onClick={clickShow}> <h3 className='story'>CLICK HERE TO SHARE A STORY!</h3></div>
                <div>{showStoriesForm ? null : <NewStoryForm makeNewStory={makeNewStory} />}</div>
                <div className='makeSpaceBottom'>
                <img src='https://cdn.pixabay.com/photo/2020/12/30/00/36/psychology-5872032_960_720.png' alt='people' />
                </div>
            </div>
            <div className='floatRight'>
            <h3 className='story'>Read User Stories</h3>
                <div>
                {storyCard}
                </div>
            </div>
        </div>
    )
}

export default StoriesList