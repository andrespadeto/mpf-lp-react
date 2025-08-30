import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ForWho } from "@/components/ForWho";
import { Infos } from "@/components/Infos";
import { Feedbacks } from "@/components/Feedbacks";
import { HowItWorks } from "@/components/HowItWorks"

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Feedbacks></Feedbacks>
      <ForWho></ForWho>
      <Infos></Infos>
      <HowItWorks></HowItWorks>
    </>
  )
}

export default App;