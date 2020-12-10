import {Container} from './styled'
import React, { useState, useEffect } from "react";


const NavbarAbm = ({handleLogout}) => {

    return(

        <Container>
            <h1>
                <a href="./">
                <img src="/assets/LogoNegro.svg" alt="Logo guias inmersivas" />
                </a>
            </h1>
            <button onClick={handleLogout}>CERRAR SESION</button>
        </Container>
    )
}

export default NavbarAbm