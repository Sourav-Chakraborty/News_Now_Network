import React from 'react'

const NewsItem =(props)=>{
   const toReadableDate=(st)=>{
        let dt=new Date(st)
        return dt.toGMTString()
    }

    const {title,description,imageUrl,newsUrl,author,date}=props;

       
        return (
           
            <>
               <div className="card mx-3 my-3" style={{width:" 18rem"}}>
              
                    <img className="card-img-top" src={imageUrl===null? "https://www.impigertech.com/sites/default/files/default_images/default-news-image_0.png":imageUrl} alt="Card"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author} on {toReadableDate(date)}</small></p>
                        <a href={newsUrl} target="_blank"  rel="noreferrer" className="btn btn-sm btn-dark">Read full article</a>
                    </div>
                </div>
            </>
        )
}


export default NewsItem
