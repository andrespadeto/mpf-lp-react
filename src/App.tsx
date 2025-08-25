import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ForWho } from "./components/ForWho";
import { Infos } from "./components/Infos";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <ForWho></ForWho>
      <Infos></Infos>
    </>
  )
}

export default App;