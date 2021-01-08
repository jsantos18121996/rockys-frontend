import { BrowserRouter, Route } from 'react-router-dom';
import Home from './component/Home';

const Routes = () => (
    <BrowserRouter>
        <Route
            exact path = "/"
            component={Home}
        />
    </BrowserRouter>
)

export default Routes;