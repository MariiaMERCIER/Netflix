import "./App.css";
import logo from "./assets/images/Netflix-logo.png";
import Section from "./components/Section"
import data from "./movies_netflix.json"


const App =()=> {
  return (
   <>
      <div className="header">
    <img className = "logo" src={logo} alt="logo Netflix"/> 
    </div>
    {data.map((elem, index)=>{
            return ( 
   <Section key={index} category={elem.category} image={elem.images} />
  
   
   )
            }
    )}
    </>
  );
}

export default App;