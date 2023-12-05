
import './App.css';
import { Biography } from './components/Biography';
import { ContactUs } from './components/ContactUs';
import { Linksection } from './components/Linksection';
import { Mainsection } from './components/Mainsection';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';




function App() {

  return (
    <div className="App bg-homeBg w-full flex flex-col justify-center items-center">
    <div className=' flex flex-col justify-center items-center w-11/12'>
      <Navbar />
      <Mainsection/>
      <Linksection/>
      <Biography/>
      <Skills/>
      <Projects/>
      <ContactUs/>
    </div>
    </div>
  );
}

export default App;
