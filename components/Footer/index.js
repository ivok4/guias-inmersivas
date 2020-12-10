import React from 'react'
import {Container} from './styled'

const Footer = () => {

    return(

        <Container>
            <p>Derechos reservados</p>
            <p>Proyecto realizado por <a href="https://www.behance.net/ivokrivzov">Ivo Krivzov</a></p>
            <a href="./login">Administrador</a>
            <a href="./contact">Contacto</a>
        </Container>
    )
}

export default Footer