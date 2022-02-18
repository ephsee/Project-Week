import { useState } from 'react'

function ResourceCard({ resources, setResources }) {

    console.log(resources)

    const linkBEComments = 'http://localhost:6001/comments'

    const [newComment, setNewComment] = useState('')

    const aComment = {
        "comment": newComment
    }

    function commentSubmit(e) {
        e.preventDefault()
        
        // setResources([{"comment": aComment.comment,"id":resources.length+1}, ...resources])
        
        fetch(linkBEComments, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(aComment),
        })
        .then(response => response.json())
        // .then(setResources([aComment, ...resources]))
        setNewComment('')
        setResources([aComment, ...resources])
    }

    function handleComment(e) {
        // console.log(e.target.value)
        setNewComment(e.target.value)
    }


    const Resource = () => {
        const killComment = res => {
            console.log("to delete id:", res.id)

            fetch(linkBEComments + "/" + res.id,
                { method: "DELETE" })
                .then(console.log)

            console.log("before deletion state", resources)
            const resourecsWOdelletedComent = resources.filter(({ id }) => id !== res.id)
            setResources(resourecsWOdelletedComent);
            console.log('state after delete', resources)
            
        }
        return (
            
            resources.map(r => {

                return (
                    <Comment key={r.comment + r.id} r={r} killComment={killComment} />
                )
            }))
    }

    const Comment = ({ r, killComment }) => {
        const deleteCommentClick = () => killComment(r)
        return (
            <div className='makeSpace listSquare'><li>{r.comment}</li> <button className='buttons' onClick={deleteCommentClick}> x </button> <br></br> </div>
    )}

    return (
        <div>
            <div className='story'>
            <h2 className='funText'>Share Resources And Research For Effective Gratiude Practices: </h2>
            <form>
                <textarea rows="5" cols="45" onChange={handleComment} type="text" placeholder="Share Your Resources and Tips" value={newComment}></textarea><br></br>
                <input onClick={commentSubmit} type="submit"></input>
            </form>
            </div>
            <div className="story" ><ul>
                <Resource />
            </ul></div>
        </div>
    )
}

export default ResourceCard