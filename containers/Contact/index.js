import React from 'react'
import {Container,
  SideContainer,
  FormLogin
} from './styled'

import * as emailjs from 'emailjs-com';




//const ContactContainer = () => {
  class ContactContainer extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, subject, message } = this.state;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'guias-inmersivas',
      subject,
      message_html: message,
    };
    emailjs.send(
      'gmail',
      'template_39kkqai',
       templateParams,
      'user_lgQMpdtbyGA33yXKQFVfF'
    )
    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
    render(){
      const { name, email, subject, message, sentMessage } = this.state;
      return (

        <Container>  
          <SideContainer>
            <h1>Contactanos</h1>
            <p>Realiza tu consulta</p>
            <FormLogin onSubmit={this.handleSubmit}>
              <input
                className="input"
                name="name"
                type="text"
                placeholder="Usuario"
                value={name}
                onChange={this.handleChange}
              />
              <input
                className="input"
                name="email"
                type="text"
                placeholder="email"
                value={email}
                onChange={this.handleChange}
              />
              <input
                className="input"
                name="subject"
                type="text"
                placeholder="Asunto"
                value={subject}
                onChange={this.handleChange}
              />
              <input
                className="input"
                name="message"
                type="text"
                placeholder="Comentarios"
                value={message}
                onChange={this.handleChange}
              />                       
            </FormLogin>
            <button>
              <a href="#" onClick={this.handleSubmit}> Enviar</a>
            </button>
          </SideContainer>
        </Container>
      );  
  }
}

export default ContactContainer;