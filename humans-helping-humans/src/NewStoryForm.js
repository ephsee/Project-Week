import {useState} from 'react'

function NewStoryForm ({stories, setStories}) {

    const [addStory, setAddStory] = useState({})

    function handleSubmit(e){
        e.preventDefault()
        setStories([newStory, ...stories])
    }

    const newStory = {
        "your_first_name":"",
        "name_of_person":"",
        "role": "",
        "story":"",
        "image_url":"",
        "thank_you_note":"",
    }

    function handleName(e) {
        console.log(e.target.value)
    }

    function handlePerson(e) {
        console.log(e.target.value)
    }

    function handleRole(e) {
        console.log(e.target.value)
    }

    function handleStory(e) {
        console.log(e.target.value)
    }

    function handleImage(e) {
        console.log(e.target.value)
    }

    function handleThanks(e) {
        console.log(e.target.value)
    }

    return (
        <div>
            <h4>Share Your Own</h4>
            <form>
                <input onChange={handleName} type="text" placeholder="Your Name"></input><br></br>
                <input onChange={handlePerson} type="text" placeholder="Your Person"></input><br></br>
                <input onChange={handleRole} type="text" placeholder="Their Role"></input><br></br>
                <input onChange={handleStory} type="text" placeholder="Share A Story"></input><br></br>
                <input onChange={handleImage} type="text" placeholder="Share an Image"></input><br></br>
                <input onChange={handleThanks} type="text" placeholder="Show Some Thanks"></input><br></br>
                <input onClick={handleSubmit} type="submit"></input>
            </form>
            <hr></hr>
        </div>
    )
}

export default NewStoryForm