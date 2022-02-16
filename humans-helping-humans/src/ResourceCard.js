import { useState } from 'react'

function ResourceCard({resources, setResources}) {

    console.log(resources)
    
    const [newComment, setNewComment] = useState('')

    const aComment = {
        "comment": newComment
    }
    
    function commentSubmit(e) {
        e.preventDefault()
        setResources([aComment, ...resources])

        fetch('http://localhost:6001/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(aComment),
            })
            .then(response => response.json())
            .then(setResources([aComment, ...resources]))
            
    }
    
    function handleComment(e) {
        console.log(e.target.value)
        setNewComment(e.target.value)
    }
    
    const resource = resources.map( r=> <li key={r.comment}>{r.comment}</li>)
        
        return (
            <div>
                <h3>Share Resources And Research For Effective Gratiude Practices: </h3>
                <form>
                    <textarea rows="5" cols="45" onChange={handleComment} type="text" placeholder="Share Your Resources and Tips" value={newComment}></textarea><br></br>
                    <input onClick={commentSubmit} type="submit"></input>
                </form>
                <div><ul>{resource}</ul></div>
            </div>
  )
}

export default ResourceCard