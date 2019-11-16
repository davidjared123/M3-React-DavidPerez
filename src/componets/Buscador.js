import React from 'react';


class Buscador extends React.Component {

    handleRef = React.createRef();

    handleData = (e) => {
        e.preventDefault()

        this.props.handleSearch(this.handleRef.current.value)
    }
  
    render() {
        return (
            <form onSubmit={this.handleData}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.handleRef} type="text" className="form-control form-control-lg" placeholder="Busca una imagen, Ejemplo: Casa" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-primary btn-block" value='Buscar' />
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;
