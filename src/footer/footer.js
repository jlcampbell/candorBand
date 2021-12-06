
import logo from '../logoName.png';
import styles from './footer.module.scss'

export function Footer() {
    return <footer>
    <button>
      <a href="https://linktr.ee/CandorBand">
       follow us

      </a>
    </button>
  <img className={styles.logoFooter} src={logo} alt="Candor Logo"></img>
    <div className={styles.name}>©Candor, 2021</div>
    <div className={styles.builtBy}>site by jessica campbell</div>

  </footer>
}