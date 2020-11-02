import React, { useState, useEffect } from "react";
import fire from '../../lib/fire';
import {Container,
  MainContainer,
  SideContainer,
  FormLogin
} from './styled'

const LoginContainer = (props) => {
  const { email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  hasAccount,
  setHasAccount,
  emailError,
  passwordError,
  } = props;
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
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <p>{emailError}</p>
              </div>
              <div>
                <img src="/assets/usuario.svg" alt="Logo usuario"></img>
                <input
                  className="input"
                  name="email"
                  type="text"
                  placeholder="Contraseña"
                  id="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}

                />
                  <p>{passwordError}</p>
              </div>
            <button onClick={handleLogin}>
              <a href="#"> INICIAR SESION</a>
            </button>            
            </FormLogin>
          </SideContainer>
        </Container>
        
    )
}


export default LoginContainer