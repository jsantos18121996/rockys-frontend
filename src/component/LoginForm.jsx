import React, { useState } from 'react';

const LoginForm = ({Login, error}) => {
    const [details, setDetails] = useState({name: "", password: ""});
    const submitHandler = e => {
        e.preventDefault();

        //a la funcion Login le paso el estado(objeto) details como argumento
        Login(details)
    }
    return(
    <div className="card card-login">
        <h5 className="card-header">Login</h5>
        
        <div className="card-body">
            <form onSubmit={submitHandler}>
                <div className=" form">
                    {(error !== "" ) ? (<div className="error">{error}</div>) : null}
                    <div className="form-group">
                        <label for="name">Usuario: </label>
                        <input type="text" name="name" id="name" className="form-control col-12 col-sm-6 ml-auto mr-auto"
                        placeholder="Ingrese el nombre de usuario"
                        onChange={e=> setDetails({...details, name: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label for="password">Password: </label>
                        <input type="password" name="password" id="password" className="form-control col-12 col-sm-6 ml-auto mr-auto"
                        placeholder="Ingrese la contraseña"
                        onChange={e => setDetails({...details, password: e.target.value})} />
                    </div>
                    <input type="submit" className="btn btn-secondary btn-login" value="Login"/>

                    
                </div>
            </form>
        </div>


        </div>

        
    )
}
export default LoginForm;