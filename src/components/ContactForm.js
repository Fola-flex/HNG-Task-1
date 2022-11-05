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
            firstname: event.target.value
        })
    }

    handleCheckChange = (event) => {
        this.setState({
            check: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstname}`)
    }
  render() {
    return (
        <>
            <form onSubmit={this.handleSubmit}>
                <div className='form-control'>
                    <label>First Name:</label>
                    <input type="text" id='first_name' value={this.state.firstname} onChange={this.handleFirstnameChange} required/>
                </div>
                <div className='form-control'>
                    <label>Last Name:</label>
                    <input type="text" id='last_name' value={this.state.lastname} onChange={this.handleLastnameChange} required/>
                </div>
                <div className='form-control'>
                    <label>Email:</label>
                    <input type="email" id='email' value={this.state.email} onChange={this.handleEmailChange} required/>
                </div>
                <div className='form-control'>
                    <label>Message:</label>
                    <textarea type="text" id='message' value={this.state.message} onChange={this.handleMessageChange} required></textarea>
                </div>
                <div className='form-control'>
                    <input type="checkbox" id='check' value={this.state.check} onChange={this.handleCheckChange} required/>
                </div>
                <button type='submit' id='btn__submit'>Submit</button>
            </form>
            <Footer />
        </>
    )
  }
}

export default ContactForm