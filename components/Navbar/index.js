import React from 'react'
import {Container} from './styled'


import fotoLogo from '../../assets/Logo.svg'

const Navbar = () => {

    return(

        <Container>
            <h1>
                <img src={fotoLogo} alt="Logo guias inmersivas" />
            </h1>
        </Container>
    )
}

export default Navbar