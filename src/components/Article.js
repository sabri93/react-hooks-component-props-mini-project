


function Article(props){
    
    return(
        <artcile>
           <h3>{props.tiltle}</h3>
           <small>{props.date}</small>
           <p>{props.preview}</p>

        </artcile>
   )
 }

export default Article