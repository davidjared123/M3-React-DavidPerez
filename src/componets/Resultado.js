import React from 'react'
import Imagenes from './Imagenes';
import Paginacion from './Paginacion'

class Resultado extends React.Component {

    mostrarImg = () =>{
        const imagenes = this.props.imagen

        if (imagenes.length === 0) return null;

        console.log(imagenes)

        return(
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {imagenes.map(
                        imagen =>(
                        <Imagenes 
                            key={imagen.id}
                            imagen={imagen}/>)
                    )}
                </div>
                
                <Paginacion 
                pagAnterior={this.props.pagAnterior}
                
                pagSiguiente={this.props.pagSiguiente}/>
            </React.Fragment>
        )
    }
    
    render() {
        return(
            <React.Fragment>
                {this.mostrarImg()}
            </React.Fragment>


        )
    }
}

export default Resultado;