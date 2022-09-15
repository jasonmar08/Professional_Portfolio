import NavBar from './components/NavBar'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import { Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  const projects = [
    {
      id: 1,
      image: '../../assets/uCutz_thumbnail.png',
      title: 'uCutz',
      github: 'https://github.com/jasonmar08/uCutz_Front_End',
      deployed: 'https://ucutz-dc42e.web.app/'
    },
    {
      id: 2,
      image: '../../assets/tech_tinder_thumbnail.png',
      title: 'Tech Tinder',
      github: 'https://github.com/anovick1/Tech-Tinder-Front',
      deployed: 'https://tech-tinder-novick.firebaseapp.com/'
    },
    {
      id: 3,
      image: '../../assets/art_gallery_thumbnail.png',
      title: 'Your Art Gallery',
      github: 'https://github.com/jasonmar08/Artwork_Collection_Directory',
      deployed: 'https://nameless-sierra-42667.herokuapp.com/'
    },
    {
      id: 4,
      image: '../../assets/word_challenge_thumbnail.png',
      title: 'Word Challenge',
      github: 'https://github.com/jasonmar08/Word_Challenge_Game',
      deployed: 'https://word-challenge-game.surge.sh/'
    },
    {
      id: 5,
      image: '../../assets/tic_tac_toe_thumbnail.png',
      title: 'Tic-Tac-Toe',
      github: 'https://github.com/jasonmar08/u1_hw_tic_tac_toe',
      deployed: 'https://tic-tac-toe-challenge.surge.sh/#'
    },
    {
      id: 6,
      image: '../../assets/ride_review_thumbnail.png',
      title: 'Rate A Ride',
      github: 'https://github.com/pfknight8/Fullstackathon_Theme_Park',
      deployed: 'Coming soon!'
    },
    {
      id: 7,
      image: '../../assets/RAWG_vue_thumbnail.png',
      title: 'RAWG Video Game Directory',
      guthub: 'https://github.com/SEI-R-6-21/u4_hw_vue_RAWG',
      deployed: 'Coming soon!'
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
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Projects" element={<Projects projects={projects} />} />
          <Route path="/Contact" element={<ContactMe />} />
          <Route path="/Projects/:ProjectId" />
        </Routes>
      </main>
    </div>
  )
}

export default App
