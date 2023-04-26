import React from 'react'

const pageTemplate = props => {
    var recipeCategories = "";
    var recipeTags = "";
    
    const data = {
        nodeFood: props.pageContext.data
    }

    console.log(data);

    return (
        <h4>{data.nodeFood.title}</h4>
    )}

export default pageTemplate