import React from 'react';
import './index.css';
import {Container} from './styled'
import Navbar from '../Navbar'
import Header from '../Header'
import Introduccion from '../Introduccion'
import Footer from '../Footer'

class App extends React.Component{

  render (){
    return (
    <Container>
        <Navbar />
        <Header />
        <Introduccion />
        <Footer />
    </Container>
    )

  }
   
}
export default App;
