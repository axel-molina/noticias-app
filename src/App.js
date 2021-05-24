import React, {Fragment} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  return (
    <Fragment>
      <Header
      titulo = 'Buscador de noticias'
      ></Header>
      <Formulario></Formulario>
    </Fragment>
  );
}

export default App;

// cursiva: font-family: 'Dancing Script', cursive;
// letra noticias: font-family: 'Roboto Condensed', sans-serif;