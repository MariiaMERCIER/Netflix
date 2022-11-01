import "./App.css";
import logo from "./assets/images/Netflix-logo.png";
import Section from "./components/Section"



const App =()=> {
  return (
   <>
      <div className="header">
    <img className = "logo" src={logo} alt="logo Netflix"/> 
    </div>
   <Section/>
    </>
  );
}

export default App;