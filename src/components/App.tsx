import { FC } from "react";
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import Header from "./Header";
import Hero from "./Hero";
import ShortenURL from "./ShortenURL";
import Statistics from "./Statistics";

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <ShortenURL />
      <Statistics />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;
