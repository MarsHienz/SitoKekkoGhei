import './App.css'
import Background from "./Background.jsx"
import Nav from "./Nav.jsx"
import Paragrafo from "./Paragrafo.jsx";
import Buttons from "./Buttons.jsx";
import Social from "./Social.jsx";
import Logo from "./Logo.jsx";

function App() {

  return (

        <div id="wrapper" className="px-20 py-3">
            <div className="flex w-full justify-between">
                <Logo/>
                <Nav/>
            </div>
            {/*<Background/>*/}
            <Paragrafo/>
            <Buttons/>
            <Social/>

        </div>


  )
}

export default App