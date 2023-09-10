import React from 'react'
import './newsitem.css'

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (

    <div className='container my-2'>
    <div className="news-app">
    <div className='new-item'>
       
        <img className='news-img' src={urlToImage} alt={urlToImage} />

        <h3><a href={url}>{title}</a></h3>
        <p>{description}</p>

    </div>
    </div>

</div>




  )
}

export default NewsItem