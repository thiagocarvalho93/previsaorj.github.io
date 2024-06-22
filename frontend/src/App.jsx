import { createSignal } from 'solid-js';
import styles from './App.module.css';
import getImagePath from './utils/image-util';
import { generateHourlyIntervals, generateMonthAbbreviations, getCurrentDayOfMonth, getCurrentMonthAbbreviation, getCurrentYear } from './utils/data-utils';

const hours = generateHourlyIntervals();
const months = generateMonthAbbreviations();

function App() {
  const [hour, setHour] = createSignal('00');
  const [day, setDay] = createSignal(getCurrentDayOfMonth());
  const [month, setMonth] = createSignal(getCurrentMonthAbbreviation());
  const [year, setYear] = createSignal(getCurrentYear());
  const [variable, setVariable] = createSignal('prec');
  const [version, setVersion] = createSignal('g1');

  const prevImage = () => { };

  const nextImage = () => {

  };

  return (
    <div class={styles.App}>
      <nav>
        <h1>Previsão Macaé</h1>
      </nav>
      <div id="app">
        <div id="image-container">
          <img
            id="forecast-image"
            src={getImagePath(variable(), version(), hour(), day(), month(), year())}
            alt="Forecast Image"
          />
        </div>
      </div>
      <footer>
        <button id="prev" onClick={prevImage}>Anterior</button>
        <button id="next" onClick={nextImage}>Próximo</button>
      </footer>
    </div>
  );
}

export default App;