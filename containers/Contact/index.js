import React from 'react'
import {Container,
  MainContainer,
  SideContainer,
  FormLogin
} from './styled'



const ContactContainer = () => {

    return(
        <Container>  
          <MainContainer>
          <img src="/assets/Logo.png" alt="Logo Twitter"></img>
            <p>Guías inmersivas</p>
          </MainContainer>
          <SideContainer>
            <h1>INICIAR SESION</h1>
            <FormLogin>
              <input
                className="input"
                name="email"
                type="text"
                placeholder="Usuario"
              />
              <input
                className="input"
                name="password"
                type="text"
                placeholder="Contraseña"
              />
            <button>
              <a href="../../assets/instagram.apk" download> Descargar apk</a>
            </button>            
            </FormLogin>
          </SideContainer>
        </Container>
        
    )
}

export default ContactContainer