import './App.css';
import AboutSection from './components/sections/about';
import HeaderSection from './components/sections/header';
import PortfolioSection from './components/sections/portfolio';
import ProfilePictureSection from './components/sections/profile';

function App() {

  return (
    <div className="App">
      <HeaderSection />
      <ProfilePictureSection />
      <PortfolioSection />
      <AboutSection />
    </div>
  );
}

export default App;
