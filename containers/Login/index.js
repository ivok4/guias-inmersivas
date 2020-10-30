import React from 'react'
import {Container,
  MainContainer,
  SideContainer,
  FormLogin
} from './styled'



const LoginContainer = () => {

    return(
        <Container>  
          <MainContainer>
          <img src="/assets/Logo.png" alt="Logo Twitter"></img>
            <p>Guías inmersivas</p>
          </MainContainer>
          <SideContainer>
            <h1>Iniciar sesion</h1>
            <FormLogin>
              <div>
                <img src="/assets/usuario.svg" alt="Logo usuario"></img>
                <input
                  className="input"
                  name="email"
                  type="text"
                  placeholder="Usuario"
                />
              </div>
              <div>
                <img src="/assets/usuario.svg" alt="Logo usuario"></img>
                <input
                  className="input"
                  name="email"
                  type="text"
                  placeholder="Contraseña"
                />
              </div>
            <button>
              <a href="#"> INICIAR SESION</a>
            </button>            
            </FormLogin>
          </SideContainer>
        </Container>
        
    )
}

export default LoginContainer