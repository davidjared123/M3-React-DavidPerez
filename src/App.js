import React from 'react';
import Buscador from './componets/Buscador';
import Resultado from './componets/Resultado';


class App extends React.Component{

scroll =()=>{
  const element = document.querySelector('.jumbotron')
  element.scrollIntoView('smooth', 'start')
}

pagAnterior = () =>{
  // leer state
  let pagina = this.state.pag;
  //si estamos en la pagina 1 no ir atras
  if(pagina === 0) return null
  //sumar 1 a la pagina actual 
  pagina -= 1
  //agregar cambio al state
  this.setState({
    pag: pagina,
  }, ()=>{this.handleAPI();
           this.scroll()
          })
}

pagSiguiente = () =>{
  // leer state
  let pagina = this.state.pag;
  //sumar 1 a la pagina actual 
  pagina++
  //agregar cambio al state
  this.setState({
    pag: pagina,
  }, ()=>{this.handleAPI()
          this.scroll()
  })

}


state = {
  term: '',
  img: [],
  pag: '',
}

handleAPI = () =>{
  const termino = this.state.term
  const pagina = this.state.pag
  const url = `https://pixabay.com/api/?key=14298416-fc9e44de12a432586f485eb1d&q=${termino}&per_page=30&page=${pagina}`

  fetch(url)
  .then(respuesta => respuesta.json())
  .then(respuesta => this.setState({img: respuesta.hits}))
}

search = (term) => {
  this.setState({
    term : term,
    pag : 1,
  }, () => {
    this.handleAPI()
  })
}

render(){
  return (
    <div className="app container text-center">
     <div className='jumbotron'>
       <p className="lead text-center">Find images</p>
       <Buscador handleSearch={this.search} />
     </div>

     <Resultado 
     imagen={this.state.img}
     pagAnterior={this.pagAnterior}
     
     pagSiguiente={this.pagSiguiente} />

    </div>
  );
}


}

export default App;
