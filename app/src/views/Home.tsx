import Header from "../components/Header";
import HomeHero from "../components/HomeHero";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <HomeHero />
    </div>
  );
}
