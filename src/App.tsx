import { AboutMe, Contact, ContactForm, Hero, Services } from "./components"
import { Therapies } from './components/sections/Therapies';
import { Header } from "./components/web-parts/Header";

function App() {

  return (
    <>
      <Header />
      <Hero/>
      <AboutMe />
      <Services />
      <Therapies />
      <Contact />
      <ContactForm />
    </>
  )
}

export default App
