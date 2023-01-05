import { ThemeProvider } from 'styled-components';
import Groups from './Components/Grupos';
import './App.css';

const theme = {
  colors: {
    header: 'rgb(214, 214, 214)',
    body: '#fff',
    footer: '#003333',
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}

export default App;
