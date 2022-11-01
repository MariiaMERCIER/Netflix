


const Section =(props)=>{
    return(  
              <div className="category">
                  <p>{props.category}</p>
                  <div className="images">
                  {props.image.map((element, index)=>{
         return ( 
         <img className="film" src={element} alt ="films"/>)
      })
          }
      </div>
      </div>
            
          
          

   
)}

export default Section;