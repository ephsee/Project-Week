function ResourceCard({resourses}) {

    const resource = resourses.map(r=>{
        return(
        <p key = {r.id}> {r.comment} </p>
        )
    })
    
  return (
      <div>
          <h3>Share Resources And Research For Effective Gratiude Practices: </h3>
          <form>
              <textarea rows="5" cols="45" placeholder="Share Your Resources and Tips"></textarea>
          </form>
          <div>{resource}</div>
      </div>
  )
}

export default ResourceCard