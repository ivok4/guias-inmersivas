import React from 'react'
import {Container,
  MainContainer,
  SideContainer
} from './styled'



const LoginContainer = () => {

    return(
        <Container>  
          <MainContainer>
          <img src="/assets/Logo.png" alt="Logo Twitter"></img>
            <p>Guías inmersivas</p>
          </MainContainer>
          <SideContainer>
            <h1>INICIAR SESION</h1>
          </SideContainer>
        </Container>
        
    )
}

export default LoginContainer