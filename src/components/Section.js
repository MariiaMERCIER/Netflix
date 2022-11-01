import data from "../movies_netflix.json"


const Section =()=>{
    return(  
        <>
        {data.map((elem, index)=>{
            return (
              <div className="category">
                  <p>{elem.category}</p>
                  <div className="images">
                  {elem.images.map((elem, index)=>{
         return ( 
         <img className="film" src={elem} alt ="films"/>)
      })
          }
      </div>
      </div>
            )
          })}
          

  </>  
)}

export default Section;