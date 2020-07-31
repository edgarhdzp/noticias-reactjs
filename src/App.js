import React, { Fragment, useEffect, useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Listado from './components/Listado';

function App() {

  //* definir categoria y nticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const url =`http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=b910aeec0d0342bc97c08bb4e76657bd`
      const respuesta = await fetch (url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarApi();
  }, [categoria]);
  
  return (
   <Fragment>
     <Header titulo="Noticias Bajio"/>
     
     <div className="container white">
      <Formulario 
      guardarCategoria={guardarCategoria}/>
     </div>
     <Listado 
     noticias={noticias}/>
   </Fragment>
  );
}

export default App;
