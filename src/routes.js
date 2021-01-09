import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import AddProductForm from './component/AddProductForm';
import Home from './component/Home';
import MesaForm from './component/MesaForm';

const Routes = () => (
    <BrowserRouter>
        <Route
            exact path = "/"
            component={Home}
        />

        <Route 
            exact path = "/tables"
            component = {MesaForm}
        />

        <Route 
            exact path = "/tables/add"
            component = {AddProductForm}
        />

        <Route 
            exact path = "/tables/add/:numero/:codigo/:producto/:precio/:cantidad/:subtotal"
            component = {MesaForm}
        />

        <Redirect
            to="/"
        />
    </BrowserRouter>
)

export default Routes;