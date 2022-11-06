import React, { Component } from 'react'
import Footer from "./Footer";

class ContactForm  extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        firstname: "",
        lastname: "",
        email: "",
        message: "",
        check: ""
      }
    }

    handleFirstnameChange = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }

    handleLastnameChange = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    handleCheckChange = (event) => {
        this.setState({
            check: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(` Thank you ${this.state.firstname}. Your response has been received`)
        event.preventDefault()
    }
  render() {
    return (
        <>
            <form onSubmit={this.handleSubmit} id="contact_form">
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask about anything you have in mind</p>
                <div className='form-control'>
                    <label>First Name</label>
                    <input type="text" id='first_name' value={this.state.firstname} onChange={this.handleFirstnameChange} placeholder="Enter your first name" required/>
                </div>
                <div className='form-control'>
                    <label>Last Name</label>
                    <input type="text" id='last_name' value={this.state.lastname} onChange={this.handleLastnameChange} placeholder="Enter your last name" required/>
                </div>
                <div className='form-control'>
                    <label>Email</label>
                    <input type="email" id='email' value={this.state.email} placeholder="yourname@email.com" onChange={this.handleEmailChange} required/>
                </div>
                <div className='form-control'>
                    <label>Message</label>
                    <textarea type="text" id='message' value={this.state.message} onChange={this.handleMessageChange} placeholder="Send me a message and I'll reply as soon as possible" required></textarea>
                </div>
                <div className='form-control'>
                    <input type="checkbox" id='check' value={this.state.check} onChange={this.handleCheckChange} required/>
                    <label>You agree to providing your data to name who may contact you</label>
                </div>
                <button type='submit' id='btn__submit'>Send Message</button>
            </form>
            <Footer />
        </>
    )
  }
}

export default ContactForm