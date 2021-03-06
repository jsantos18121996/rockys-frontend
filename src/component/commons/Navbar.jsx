import React from 'react';

const Navbar = ({userName = null, Logout = null}) => {

    const LogoutNavbar = e => {
        Logout();
    }

    return(
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">

                <div>
                    <a class="navbar-brand" href="#">Bienvenido, {userName}</a>


                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit"
                    onClick={LogoutNavbar}>Salir</button>
                </div>

</nav>
        </header>
    )
}

export default Navbar;