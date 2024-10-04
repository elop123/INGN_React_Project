import { useQuery } from "@tanstack/react-query";
import { oneArticle } from "../Queries/oneArticle";
import { request } from "graphql-request";
import { FaEdit } from 'react-icons/fa';
import {FaTrash} from 'react-icons/fa'
import DOMPurify from 'dompurify'
import { useParams } from "react-router-dom";
import s from '../style/Details.module.scss'


function Details () {
    const {id} =useParams()
    console.log("Article with id:", id);

    const{data, isLoading, error} = useQuery({
        queryKey:['oneArticle', id],
        queryFn:async ()=> request ('https://api-eu-west-2.hygraph.com/v2/cm1omle8204rd07ux0uxwgrky/master',
         oneArticle, {postId:id})
    })
    console.log(data)


if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className={s.gridContainer}>
    
     {data?.post.map((item) => {
       // Sanitize the HTML content
       const sanitizedContent = DOMPurify.sanitize(item.content.html)
      return(
      
       
        <article className={s.articleStyle} key={item.id}  >
          <img  className={s.imageStyle} src={item.image.url} alt={item.title} />
          <h2 className={s.titleStyle} >{item.title}</h2>
          <h4 className={s.dateStyle}>D.{item.date} af-{item.author}</h4>
          <p  className={s.textStyle} dangerouslySetInnerHTML={{ __html: sanitizedContent }} /> 
          {/* <h5>{item.category}</h5> */}
        </article>
      )})} 
     
    </div>
  );
}


export default Details