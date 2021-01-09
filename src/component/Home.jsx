import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    //llamada al api que lista las mesas 
    //lo simulamos con una lista

    const listaMesas = [
        {id: 1, name: 'Mesa 1', descripcion: '2 personas', num: 1, ocupado: true},
        {id: 2, name: 'Mesa 2', descripcion: '4 personas', num: 2, ocupado: false},
        {id: 3, name: 'Mesa 3', descripcion: '1 personas', num: 3, ocupado: false},
        {id: 4, name: 'Mesa 4', descripcion: '2 personas', num: 4, ocupado: true}
    ];
    return(
    
    <div className="row"> 

                
                    { listaMesas.map(
                        mesa => (
                            <div  className="card  col-12 col-sm-3">
                                <div className="card-header">
                                    {mesa.name}
                                </div>
                                <div class="card-body">
                                    <h5 className="card-title">Capacidad máxima</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">{mesa.descripcion} </h6>
                                    <p class="card-text">{mesa.ocupado ? 'Ocupado' : 'Libre'}</p>
                                    <Link to="/tables">
                                        <button href="#" className="btn btn-primary">Asignar pedido</button>
                                    </Link>
                                    
                                </div>
                            </div>
                        )
                    )

                    }
                   
                
            
        
     
        
    </div>)
}

export default Home;