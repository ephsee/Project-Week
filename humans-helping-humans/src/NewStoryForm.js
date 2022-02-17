import { useState } from 'react'

function NewStoryForm({ makeNewStory }) {

    const [name, setName] = useState('')
    const [person, setPerson] = useState('')
    const [role, setRole] = useState('')
    const [story, setStory] = useState('')
    const [image, setImage] = useState('')
    const [thanks, setThanks] = useState('')


    function handleSubmit(e) {
        e.preventDefault()

        console.log("new object story:", newStory);
        makeNewStory(newStory)
    }

    const newStory = {
        "your_first_name": name,
        "name_of_person": person,
        "role": role,
        "story": story,
        "image_url": image,
        "thank_you_note": thanks,
        "likes": 0
    }

    function handleName(e) {
        console.log(e.target.value)
        setName(e.target.value)
    }

    function handlePerson(e) {
        console.log(e.target.value)
        setPerson(e.target.value)
    }

    function handleRole(e) {
        console.log(e.target.value)
        setRole(e.target.value)
    }

    function handleStory(e) {
        console.log(e.target.value)
        setStory(e.target.value)
    }

    function handleImage(e) {
        console.log(e.target.value)
        setImage(e.target.value)
    }

    function handleThanks(e) {
        console.log(e.target.value)
        setThanks(e.target.value)
    }

    return (
        <div className='story'>
            <h4>Share Your Own</h4>
            <div>
            <form>
                <input onChange={handleName} type="text" placeholder="Your Name"></input><br></br>
                <input onChange={handlePerson} type="text" placeholder="Your Person"></input><br></br>
                <input onChange={handleRole} type="text" placeholder="Their Role"></input><br></br>
                <input onChange={handleImage} type="text" placeholder="Share an Image"></input><br></br>
                <input onChange={handleThanks} type="text" placeholder="Write a Thank You Note"></input><br></br>
                <br></br>
                <textarea rows="5" cols="45" onChange={handleStory} type="text" placeholder="Share A Story"></textarea><br></br>
                <input onClick={handleSubmit} type="submit"></input>
            </form>
            </div>
        </div>
    )
}

export default NewStoryForm