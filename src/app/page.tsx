import Hero from "@/components/homepage/hero";
import TheWho from "@/components/homepage/thewho";
import Different from "@/components/homepage/wearedifferent";
import WhoWeAre from "@/components/homepage/whoweare";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhoWeAre/>
      <Different/>
      <TheWho/>
      <Footer/>
    </div>
  )
}
