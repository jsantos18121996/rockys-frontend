import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MesaForm extends Component  {
    //llamada al api que lista las mesas 
    //lo simulamos con una lista

    /*const addProducto = producto => {
        console.log("EL PRODUCTO", producto)
    }*/

    state = {
        producto : {
            numero: '',
            codigo: '',
            producto: '',
            precio: '',
            cantidad: '',
            subtotal: ''
        },
        productos: []
    }

    componentDidMount () {
        const {match: { params }} = this.props;
        console.log('PARAMS', params.numero);
        
        if(params!==undefined) {
            this.setState({
                producto: {
                    numero: params.numero,
                    codigo: params.codigo,
                    producto: params.producto,
                    precio: params.precio,
                    cantidad: params.cantidad,
                    subtotal: params.subtotal
                }
            })
            this.state.productos.push(this.state.producto);
        }

       
    }
    
    
render() {
    const {match: { params }} = this.props;
    console.log("TAMAÑO DE PRODUCTS", this.state.productos );
    return(

        <div className="d-flex">
            <div className="table-bottons">
                <Link to="/tables/add">
                <button href="#" className="btn btn-secondary">Agregar</button>
                </Link>
            

                <Link to="#">
                <button href="#" className="btn btn-secondary">Asignar RFID</button>
                </Link>

                <Link to="#">
                <button href="#" className="btn btn-secondary">Terminar</button>
                </Link>
        |   </div>

        
            <div className="table-tables"> 
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">Número</th>
                        <th scope="col">Código</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Subtotal</th>
                        </tr>
                    </thead>
                    {
                        this.state.productos.length > 0 ? 
                        (<tbody>
                        
                            {
                                this.state.productos.map( product => {
                                    return(
                                    <tr>
                                        <th>{params.numero}</th>
                                        <th>{params.codigo}</th>
                                        <td>{params.producto}</td>
                                        <td>{params.precio}</td>
                                        <td>{params.cantidad}</td>
                                        <td>{params.subtotal}</td>
                                    </tr>
                                    )
                                    
                                })
                            }
                        
                    </tbody>): 'NO HAY PRODUCTOS'

                    }
                    
            </table>


            </div>

    </div>
    )

   
}
}

export default MesaForm;