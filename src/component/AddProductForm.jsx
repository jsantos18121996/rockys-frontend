import React, { useState } from 'react';
import MesaForm from './MesaForm';
import { Link } from 'react-router-dom';

const AddProductForm = ({Login, error}) => {
    const [product, setProduct] = useState({numero: "", codigo: "", producto: "", precio: "", cantidad : "", subtotal: ""});
    const [isAddProduct , setIsAddProduct] = useState(false);
    const submitHandler = e => {
        e.preventDefault();

        console.log("PRODUCTO SETEADO", product);
        setIsAddProduct(true);

        console.log("IS ADD PRODUCT", isAddProduct);

        //a la funcion Login le paso el estado(objeto) details como argumento
        
    }

    const createUrlToSend = () => {
        let link = '';
        link = '/tables/add/'.concat(product.numero).concat('/')
        .concat(product.codigo).concat('/')
        .concat(product.producto).concat('/')
        .concat(product.precio).concat('/')
        .concat(product.cantidad).concat('/')
        .concat(product.subtotal);
        console.log('link', link);
        return link;

    }

    let linkTo = '';
    if(product.numero!=="" && product.codigo!=="" && product.producto!=="" && product.precio!==""
        && product.cantidad!=="" && product.subtotal!=="") {
            linkTo = createUrlToSend();
            console.log('LINK TO', linkTo)
        }

    return(
    <div className="card card-login">
        <h5 className="card-header">Agregar producto</h5>
        
        <div className="card-body card-body-login">
            <form onSubmit={submitHandler}>
                <div className=" form">
                        <div className="d-flex ml-auto">
                            <div className="form-group w-50">
                                <label for="numero">Número: </label>
                                <input type="text" name="numero" id="numero" className="form-control col-12 col-sm-12 ml-auto mr-auto"
                                
                                onChange={e=> setProduct({...product, numero: e.target.value})}/>
                            </div>
                            <div className="form-group w-50">
                                <label for="codigo">Código: </label>
                                <input type="text" name="codigo" id="codigo" className="form-control col-12 col-sm-12 ml-auto mr-auto"
                                
                                onChange={e=> setProduct({...product, codigo: e.target.value})}/>
                            </div>
                        </div>
                    <div className="d-flex">
                        <div className="form-group w-50">
                            <label for="producto">Producto: </label>
                            <input type="text" name="producto" id="producto" className="form-control col-12 col-sm-12 ml-auto mr-auto"
                            
                            onChange={e=> setProduct({...product, producto: e.target.value})}/>
                        </div>
                        <div className="form-group w-50">
                            <label for="precio">Precio: </label>
                            <input type="text" name="precio" id="precio" className="form-control col-12 col-sm-12 ml-auto mr-auto"
                            
                            onChange={e=> setProduct({...product, precio: e.target.value})}/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="form-group w-50">
                            <label for="cantidad">Cantidad: </label>
                            <input type="text" name="cantidad" id="cantidad" className="form-control col-12 col-sm-12 ml-auto mr-auto"
                            
                            onChange={e=> setProduct({...product, cantidad: e.target.value})}/>
                        </div>
                        <div className="form-group w-50">
                            <label for="subtotal">Subtotal: </label>
                            <input type="text" name="subtotal" id="subtotal" className="form-control col-12 col-sm-12 ml-auto mr-auto"
                            
                            onChange={e=> setProduct({...product, subtotal: e.target.value})}/>
                        </div>
                    </div>
                    <Link to={linkTo}>
                        <input type="submit" className="btn btn-secondary boton-add-product" value="Agregar"/>
                    </Link>
                    

                    
                </div>
            </form>
        </div>


        </div>

        
    )
}
export default AddProductForm;