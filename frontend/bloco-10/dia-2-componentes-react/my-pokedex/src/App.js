import './App.css';
import Pokemon from './components/Pokemon';
import data from './data';

function App() {

  return (
    <main className='main-container'>

      {data.map((element) => {
        return <Pokemon pokemon={element}/>
      })}

    </main>
  );
}

export default App;
