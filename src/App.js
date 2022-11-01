import "./App.css";
import data from "./movies_netflix.json";
import logo from "./assets/images/Netflix-logo.png";

const App =()=> {
  return (
   <>
      <div className="header">
    <img className = "logo" src={logo} alt="logo Netflix"/> 
    </div>
    <div >
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
    </div>
    </>
  );
}

export default App;