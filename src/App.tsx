import './App.css'
import AvatarBox from './components/AvatarBox/AvatarBox';
import Contacts from './components/Contacts/Contacts';
import CareerProfile from './components/CareerProfiel/CareerProfile';
import Experiences from './components/Experiences/Experiences';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
        <div className="left-column">
          <AvatarBox />

          <div className="left-column-inner">
            <Contacts />
          </div>
        </div>

        <div className="right-column">
          <CareerProfile />

          <Experiences />

          <Projects />

          <Skills />
        </div>
    </div>
  )
}

export default App
