import React from 'react'
import {Container} from './styled'

const Navbar = () => {

    return(

        <Container>
            <h1> Guias Inmersivas</h1>
            <h2>
                <a href="./">
                <img src="/assets/Logo.svg" alt="Logo guias inmersivas" />
                </a>
            </h2>
        </Container>
    )
}

export default Navbar