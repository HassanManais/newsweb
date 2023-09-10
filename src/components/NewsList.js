import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'


const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=cricket&apiKey=242bb21c479e4aedabbccf87a3d77956`)
            setArticles(response.data.articles)
            console.log(response)
        }

        getArticles()
    }, [])

  return (
    
    <div>
    {articles.map(article => {

        console.log("Article:After-Map-Method...");
        return(
            <NewsItem 
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage} 
            />
        )
    })}
</div>


    
  )
}

export default NewsList