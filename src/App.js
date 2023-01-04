import { ThemeProvider } from 'styled-components';
import Grupos from './Components/Grupos';
import './App.css'

const theme = {
    colors: {
        header: 'rgb(214, 214, 214)',
        body: '#fff',
        footer: '#003333'
    }

}
function App() {

    return (
        <ThemeProvider theme={theme}>
            <Grupos />
        </ThemeProvider>
    )
}

export default App;