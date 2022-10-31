import './App.css';
import Profile from './components/Profile';
import Footer from './components/Footer';
import { FaSlack, FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="Container">
      {/* Including the profile component */}
      <Profile />

      {/* Including the share button */}
      {/* <img src={maxsharebtn} alt='Share button' className='sharebtn'/> */}
      <div className='sharebtn'></div>

      <br />
      {/* Including the buttons */}
      <a id="twitter" href="https://twitter.com/only1franchesco" className="Btn">Twitter Link</a>
      <br />
      <a id="btn_zuri" href="https://training.zuri.team/" className='Btn'>Zuri Team</a>
      <br />
      <a id="books" href="http://books.zuri.team" className='Btn'>Zuri Books</a>
      <br />
      <a id="book_python" href="https://books.zuri.team/python-for-beginners?ref_id=Ginika Chinonso" className='Btn'>Python Books</a>
      <br />
      <a id="pitch" href="https://background.zuri.team" className='Btn'>Background Check for Coders</a>
      <br />
      <a id="book__design" href="https://books.zuri.team/design-rules" className='Btn'>Design Books</a>
      <br />
      <div>
        {/* Including the Slack and Github logos */}
        <FaSlack id="Slack-logo" class="logos"/>
        <FaGithub id="Github-logo" class="logos"/>
      </div>
      <br />
      <hr />
      {/* Including the footer component */}
      <Footer />
    </div>
  );
}

export default App;
