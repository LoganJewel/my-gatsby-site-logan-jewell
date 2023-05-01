import * as React from "react"

function recipeTemplate(props) {
  const post = props.data.recipeInstrucions
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ recipeInstruction.processed }} />
    </div>
  )
}

export default recipeTemplate