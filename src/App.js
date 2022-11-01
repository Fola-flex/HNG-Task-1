import './App.css';

function App() {
  return (
    <div className='app'>
      <header className="profile-avatar">
        <img id="profile__img" src="profile__img.svg" alt="profile image" />
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
            <a href="https://books.zuri.team/design-rules"  id="slack">Muiz Afolarin Olaore</a>
          </button>
        </div>
      </div>
      <div className='social_links'>
        <div className="wrapper">
          <img src="slack.svg" />
          <img src="Icon.svg" />
        </div>

      </div>
      <footer className="footer">
        <img  src="Zuri.Internship_Logo.svg" alt="Zuri Internship Logo" />
        <img  src="Footer text.svg" alt="HNG Internship Text" />
        <img  src="I4G.svg" alt="I4G Logo" />
      </footer>

    </div>
  );
}

export default App;
