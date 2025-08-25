import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ForWho } from "@/components/ForWho";
import { Infos } from "@/components/Infos";
import { MyFeatures } from "@/components/MyFeatures";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <ForWho></ForWho>
      <Infos></Infos>
      <MyFeatures></MyFeatures>
    </>
  )
}

export default App;