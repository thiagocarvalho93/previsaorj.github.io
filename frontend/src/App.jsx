import { createSignal } from 'solid-js';
import styles from './App.module.css';
import getImagePath from './utils/image-util';
import { generateHourlyIntervals, generateMonthAbbreviations, getCurrentDayOfMonth, getCurrentMonthAbbreviation, getCurrentYear } from './utils/data-utils';

const hours = generateHourlyIntervals();
const months = generateMonthAbbreviations();

function App() {
  const [hourIndex, setHourIndex] = createSignal(0);
  const [day, setDay] = createSignal(getCurrentDayOfMonth());
  const [month, setMonth] = createSignal(getCurrentMonthAbbreviation());
  const [year, setYear] = createSignal(getCurrentYear());
  const [variable, setVariable] = createSignal('temp');
  const [version, setVersion] = createSignal('g1');

  const prevImage = () => {
    setHourIndex((index) => (index > 0 ? index - 1 : hours.length - 1));
  };

  const nextImage = () => {
    setHourIndex((index) => (index < hours.length - 1 ? index + 1 : 0));
  };

  return (
    <div class={styles.App}>
      <nav>
        <h1>{`${hours[hourIndex()]}:00 ${day()}/${month()}/${year()}`}</h1>
      </nav>
      <div id="app">
        <div id="image-container">
          <img
            id="forecast-image"
            src={getImagePath(variable(), version(), hours[hourIndex()], day(), month(), year())}
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