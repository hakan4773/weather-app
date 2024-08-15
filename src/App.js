import './App.css';
import Container from './components/Container';
import { WeatherProvider } from './context/Weather';
import { ThemeProvider } from './context/Theme';
import Days from './components/Days';

function App() {
  return (
    <div className="App">
      /{/* Context Api kullanımı */}
      <ThemeProvider>
        <WeatherProvider>
          <Container />
          <Days />
        </WeatherProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
