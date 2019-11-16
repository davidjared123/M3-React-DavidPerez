import React from 'react'

const Imagenes =(props) => {
    
    const {largeImageURL, views, previewURL, tags, downloads, likes} = props.imagen;
    
        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card" >
                    <img src={previewURL} alt={tags} className="card-img-top" />
                    <div className="card-body">
                      <p className="card-text">{likes} Me gusta</p>
                      <p className="card-text">Visto {views}</p>
                        <p className="card-text">Descargas {downloads}</p>
                      
                      <a href={largeImageURL} target="blank" className="btn btn-danger btn-block">Ver imagen</a>
                    </div>
                </div>
            </div>
        );
    
}

export default Imagenes;