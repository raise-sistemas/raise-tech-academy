import './App.css';
import Form from './components/input.js';

function App() {
  //FIXME o <Form/> estava como descendente de p, e isso não é permitido, apesar de rodar, p não pode ter filhos.
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload. */}
        <Form />
        {/* </p> */}
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
