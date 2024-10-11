import Header from "../Components/Header";
import HomeHero from "../Components/HomeHero";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <HomeHero />
    </div>
  );
}
