import logo from './logoName.png';
import styles from './App.module.scss';
import { Footer } from './footer/footer';
import PersistentDrawerLeft from './globalNav/globalNav'
import grey from '@mui/material/colors/grey'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import {BuyButton} from './buyButton/buyButton'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: grey
  }
})



function App() {
  return (
<ThemeProvider theme={theme}>
    <div className={styles.App}>
      <PersistentDrawerLeft>
        <div className={styles.banner}>
        </div>
        <div className={styles.content}>
          
        <BuyButton></BuyButton>

        </div>
        <Footer></Footer>
      </PersistentDrawerLeft>
    </div>
    
    </ThemeProvider>
  );
}

export default App;
