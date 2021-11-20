import logo from './logoName.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="banner">
      <div className='Nav'>
        
        <img className="logo-sm" src={logo} alt="Candor Logo"></img>
        <ul className="navLinks">
        
        <li><a href="https://linktr.ee/CandorBand" target="_blank" rel="noopener noreferrer">
          music
          </a>
          </li>

        </ul>
      </div>
        {/* <img className="logo" src={logo}></img> */}

      </div>
      {/* <ul className="Highlights">
        <li id="ep" className="Highlight">
          <div className="ep-background"></div>
          <div  className="ep-content">
            {/* <h2>new ep</h2>
            <span>Out now</span>
            <button><a>Stream</a></button> */}
          {/* </div> */}
        {/* </li> */}
      {/* </ul> */}
     <footer>
       <button>
         <a>
          follow us

         </a>
       </button>
     <img className="logo-footer" src={logo} alt="Candor Logo"></img>
       <div className='name'>©Candor, 2021</div>
       <div className='builtBy'>site by jessica campbell</div>

     </footer>
    </div>
  );
}

export default App;
