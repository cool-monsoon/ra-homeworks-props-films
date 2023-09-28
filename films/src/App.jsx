import Stars from './components/Stars';
import './App.css';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function App() {
  return (
    <Stars count={getRandomIntInclusive(1, 5)} />
  );
}