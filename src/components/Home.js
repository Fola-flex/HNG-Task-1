import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

export default class Home extends Component {
  render() {
    return (
        <>
            <div className='app'>
                <header className="profile-avatar">
                    <img id="profile__img" src="profile__img.svg" alt="profile avatar" />
                    <img id="share_btn" src="Avatar share button.svg" alt="share button icon" />
                    <h2>Annette Black</h2>
                </header>
                <div className="link-section">
                    <div className="link-buttons">
                        <button>
                            <a href="https://mobile.twitter.com/Man_like_Fola"  id="twitter">Twitter Link</a>
                        </button>
                        <button>
                            <a href="https://training.zuri.team/"  id="btn__zuri">Zuri Team</a>
                        </button>
                        <button>
                            <a href="http://books.zuri.team" id="books">Zuri Books</a>
                        </button>
                        <button>
                            <a href="https://books.zuri.team/python-for-beginners?ref_id=<MuizAfolarinOlaore>"  id="book__python">Python Books</a>
                        </button>
                        <button>
                            <a href="https://background.zuri.team/"  id="pitch">Background check for Coders</a>
                        </button>
                        <button>
                            <a href="https://books.zuri.team/design-rules"  id="book__design">Design Books</a>
                        </button>
                        <button>
                            <Link to="/contact" id='contact'>Contact Me</Link> 
                        </button>
                        <button>
                            <a href="https://books.zuri.team/design-rules"  id="slack">Muiz Afolarin Olaore</a>
                        </button> 
                    </div>
                </div>
                <div className='social_links'>
                    <div className="wrapper">
                        <img src="slack.svg" alt="Slack Icon" />
                        <img src="Icon.svg"  alt="Github Icon"/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
  }
}
