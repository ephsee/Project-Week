
function ResourceCard({resourses}) {
    const resource = resourses.map(r=>{
        return(
        <p key = {r.id}> {r.gratitude_fact} </p>
        )
    })
  return (
      <div>
          <h3>Resources And Research For Effective Gratiude Practices</h3>
          <div>{resource}</div>
      </div>
  )
}

export default ResourceCard