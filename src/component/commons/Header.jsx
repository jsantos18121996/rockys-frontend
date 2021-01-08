import React from 'react';


const Header = () => {
    return(
        <header>
<navbar className="navbar pt-0 pb-0 navbar-main">
    <div className="navbar-brand">
    <div class="navbar-item">
                    <a href="#">
                        <img class="logo" src="https://rokysrfid.herokuapp.com/img/LOGO-ROKYS-2017-01.png" alt="Rokys" height="60" />
                        <span class="separator"></span>
                    </a>
                </div>
    </div>
                
        <div class="opciones-container">
            <div class="user-box">
                <figure class="avatar">
                        <img src="https://rokysrfid.herokuapp.com/img/r2d2.png" alt="UserAvatar" height="40" />
                </figure>
                <div class="user-container">
                    <span class="nombre">Francisco Antonio</span>
                    <span class="rol">Cajero</span>
                </div>
            </div>
            <ul class="notificaciones">
                <a href="#">
                    <li class="">
                        <i class="fa fa-bell"></i>
                        <span class="badge"></span>
                    </li>
                </a>
                <a href="#">
                    <li>
                        <i class="fa fa-envelope"></i>
                        <span class="badge"></span>
                    </li>
                </a>
                <a href="index">
                    <li>
                        <i class="fa fa-power-off"></i>
                        <span class="badge"></span>
                    </li>
                </a>
            </ul>
        </div>
        </navbar>
    </header>
    )
}

export default Header;