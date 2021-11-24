
import logo from '../logoName.png';

export function Footer() {
    return <footer>
    <button>
      <a href="https://linktr.ee/CandorBand">
       follow us

      </a>
    </button>
  <img className="logo-footer" src={logo} alt="Candor Logo"></img>
    <div className='name'>©Candor, 2021</div>
    <div className='builtBy'>site by jessica campbell</div>

  </footer>
}