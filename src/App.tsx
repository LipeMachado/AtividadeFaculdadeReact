import { Header } from './Components/Header';
import GlobalStyle from './Style/global';
import { ThemeProvider } from 'styled-components';
import dark from './Style/Theme/dark'
import { HomePage } from './Page/HomePage';

export function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <HomePage />
      </ThemeProvider>
    </>
  )
}
