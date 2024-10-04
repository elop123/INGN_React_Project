import { useQuery } from "@tanstack/react-query";
import { myArticles } from "../Queries/myArticles";
import { request } from "graphql-request";
import { FaEdit } from 'react-icons/fa';
import {FaTrash} from 'react-icons/fa'
import DOMPurify from 'dompurify'
import s from '../style/Alle.module.scss'
import {Link} from "react-router-dom"

function Alle(){
  const {data, isLoading, error} = useQuery({
    queryKey: ['myArticles'],
    queryFn: async () =>
      request(
        'https://api-eu-west-2.hygraph.com/v2/cm1omle8204rd07ux0uxwgrky/master',myArticles)
  })  
  console.log(data); 

 

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section className={s.gridContainer}>
    
     {data?.post.map((item, index) => {
       // Sanitize the HTML content
       const sanitizedContent = DOMPurify.sanitize(item.content.html)
      return(
      
       
        <article className={s.articleStyle} key={item.id} style={{ gridArea: "a" + (index + 1) }} >
          {/* <div className={s.iconStyle} >
          <FaEdit  size={25} color="red" />
          <FaTrash  size={21} color="red"/>
          </div> */}
          <div>
          <h2 className={s.titleStyle} >{item.title}</h2>
          {/* <p dangerouslySetInnerHTML={{ __html: sanitizedContent }} /> */}
          <h4 className={s.dateStyle}>D.{item.date} af-{item.author}</h4>
          <Link className={s.readMore} to={`/details/${item.id}`}>
              Læs mere
            </Link>
            </div>
          <img  className={s.imageStyle} src={item.image.url} alt={item.title} />
          
        </article>
       
      )})} 
     
    </section>
  );
}

export default Alle
