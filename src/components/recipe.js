import React from 'react'

const recipeTemplate = props => {
    var recipeCategories = "";
    var recipeTags = "";

    console.log(data);
    
    const data = {
        nodeFood: props.pageContext.data
    }

    data.nodeFood.recipeCategory.forEach(( {name}, index ) => {
        recipeCategories += (name + " ");
    })
    data.nodeFood.tags.forEach(( {name}, index ) => {
        recipeTags += (name + " ");
    })

    console.log(data);

    return (
        <h4>{data.nodeFood.title}</h4>
    )}

export default recipeTemplate