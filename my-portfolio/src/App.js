import NavBar from './components/NavBar'
import Welcome from './pages/Welcome'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

const App = () => {
  const location = useLocation()
  const projects = [
    {
      id: 1,
      image: '../../assets/uCutz_portfolio.png',
      title: 'uCutz',
      description:
        'uCutz is a go-to platform dedicated to your next haircut. As a customer, you can browse for barbershops and their barbers. As a barbershop or an independent barber looking to freelance your talent, you can create an account to manage appointments and optimize your business. Our priority is helping barbers run their business more effectively while also allowing customers to seamlessly schedule their next haircut and feel ready to face the world looking fresh!',
      note: "*Note: Client username: 'schwartzr@gmail.com' and password: 'password' for login access.",
      stack:
        'React, React Router, Node, Express, PostgreSQL, Sequelize, and Firebase Deployment',
      github: 'https://github.com/jasonmar08/uCutz_Front_End',
      deployed: 'http://d16pebddosrjbz.cloudfront.net/'
    },
    {
      id: 2,
      image: '../../assets/tech_portfolio.png',
      title: 'Tech Tinder',
      description:
        "A modern dating app for innovators in tech. Tech Tinder offers a platform for individuals in tech who have been searching for their techy significant other to share life with. With a few swipes and likes, you may be Mr. Bezo's newest match! The app was built with a responsive design on mobile devices.",
      stack:
        'React, React Router, Node, Express, PostgreSQL, Sequelize, and Firebase Deployment',
      github: 'https://github.com/anovick1/Tech-Tinder-Front',
      deployed: 'https://tech-tinder-novick.firebaseapp.com/'
    },
    {
      id: 3,
      image: '../../assets/art_gallery_portfolio.png',
      title: 'Your Art Gallery',
      description:
        'An online art district where artists can come together and share their unique creations from all around the globe. Artists have the option of promoting an entire collection of artwork, or single pieces.',
      stack:
        'React, React Router, Node, Express, MongoDB, Mongoose, and Heroku Deployment',
      github: 'https://github.com/jasonmar08/Artwork_Collection_Directory',
      deployed: 'https://nameless-sierra-42667.herokuapp.com/'
    },
    {
      id: 4,
      image: '../../assets/blizzrd_portfolio.png',
      title: 'Blizzrd',
      description:
        "Blizzrd is a fun mobile-friendly weather app that allows users around the globe to check their local forecast. I utilized Python with Django, and Django Templates. Weather information is being retrieved from OpenWeather's public API. Current functionality includes searching weather information by city. Future iterations will be released with added features, including toggling weather units between ºF and ºC, and allowing user account creation with CRUD functionality.",
      stack:
        'Python, Django, HTML, CSS, OpenWeather API, and PythonAnywhere Deployment',
      github: 'https://github.com/jasonmar08/Blizzrd',
      deployed: 'http://devapp.pythonanywhere.com/'
    },
    {
      id: 5,
      image: '../../assets/fullstackathon_portfolio.png',
      title: 'Rating Thrills',
      description:
        'A full-stack Rides Review app built in one day in collaboration with two other peers. I worked on the front-end with React and React Router. Inspired by the classic RollerCoaster Tycoon game. Users have the option upload a roller coaster ride and provide a rating and description of their experience. This can be scaled to include roller coasters around the world.',
      stack: 'React, React Router, Node, Express, MongoDB, Mongoose',
      github: 'https://github.com/pfknight8/Fullstackathon_Theme_Park',
      deployed: 'Coming soon!'
    },
    {
      id: 6,
      image: '../../assets/word_challenge_portfolio.png',
      title: 'Word Challenge',
      description:
        'A word game built in a week that tests your trivia knowledge. Can you solve the clues and guess the hidden word? Once the player starts the game, a clue will propagate in the form of either a question or statement. The challenge is to determine the hidden word and type the guessed letters into the input fields. The player must guess wisely before runninh out of tries.',
      stack: 'Vanilla JavaScript, HTML, CSS, and Surge Deployment',
      github: 'https://github.com/jasonmar08/Word_Challenge_Game',
      deployed: 'https://word-challenge-game.surge.sh/'
    },
    {
      id: 7,
      image: '../../assets/tic_tac_toe_portfolio.png',
      title: 'Tic-Tac-Toe',
      description:
        'My first app built over a weekend. Encompasses the functionality of the classic Tic-Tac-Toe game we all grew up with and loved to challenge our family and friends on.',
      stack: 'Vanilla JavaScript, HTML, CSS, and Surge Deployment',
      github: 'https://github.com/jasonmar08/u1_hw_tic_tac_toe',
      deployed: 'https://tic-tac-toe-challenge.surge.sh/#'
    }
  ]

  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  // }, [])
  // const [pageLoad, setPageLoad] = useState(false)

  // const scrollToTop = () => {
  //   if (!pageLoad) {
  //     window.scroll(0, 0)
  //   }
  //   scrollToTop()
  // }

  return (
    <div className="app">
      <ScrollToTop />
      <header>
        <NavBar />
        {location.pathname === '/AboutMe' ? (
          <img id="miami-banner" src="assets/miami_banner.jpeg" alt="banner" />
        ) : null}
      </header>
      <main>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Projects" element={<Projects projects={projects} />} />
          <Route path="/Contact" element={<ContactMe />} />
          <Route path="/Projects/:ProjectId" />
        </Routes>
      </main>
      {/* <footer>{location.pathname === '/' ? null : <Footer />}</footer> */}
    </div>
  )
}

export default App
