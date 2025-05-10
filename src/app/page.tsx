import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Features from "./components/features";
import PinnedArtists from "./components/pinnedArtists";
import FavSongs from "./components/favSongs";
import Pricing from "./components/pricing";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <div className="bg-[#121212] h-auto w-screen flex flex-col items-center justify-center">
        <Navbar></Navbar>
        <Hero></Hero>
        <Features></Features>
        <PinnedArtists></PinnedArtists>
        <FavSongs></FavSongs>
        <Pricing></Pricing>
        <Footer></Footer>
      </div>
    </>
  );
}
