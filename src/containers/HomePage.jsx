import React from 'react'
import Article from '../article/components/Article/Article';
import ArticleList from '../article/containers/list';


const properties = [
    { id: 1, src:'assets/Ghost_Emoji.png', price: 500},
    { id: 2, src:'assets/Ghost_Emoji.png', price: 500},
    { id: 3, src:'assets/Ghost_Emoji.png', price: 500},
    { id: 4, src:'assets/Ghost_Emoji.png', price: 500},
    { id: 5, src:'assets/Ghost_Emoji.png', price: 500},
    { id: 6, src:'assets/Ghost_Emoji.png', price: 500},
    { id: 7, src:'assets/Ghost_Emoji.png', price: 500},
    { id: 8, src:'assets/Ghost_Emoji.png', price: 500},
    { id: 9, src:'assets/Ghost_Emoji.png', price: 500},
    { id: 10, src:'assets/Ghost_Emoji.png', price: 500},
];

function HomePage () {

    return ( 
        <div>
            <ArticleList 
                articles={properties}
                />
        </div>
    )
}

export default HomePage