import React from 'react'

const articleTemplate = props => {
    var artTags = "";
    
    const data = {
        nodeFood: props.pageContext.data
    }

    data.nodeFood.tags.forEach(( {name}, index ) => {
        artTags += (name + " ");
    })

    console.log(data);

    return (
        <h4>{data.nodeFood?.title}</h4>
    )}

export default articleTemplate