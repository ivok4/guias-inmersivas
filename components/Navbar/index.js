import React from 'react'
import {Container} from './styled'

const Navbar = () => {

    return(

        <Container>
            <h1>
                <a href="./">
                <img src="/assets/Logo.svg" alt="Logo guias inmersivas" />
                </a>
            </h1>
        </Container>
    )
}

export default Navbar