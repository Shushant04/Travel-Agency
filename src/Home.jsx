import React from "react";
import PopularDestination  from './components/PopularDestination'
import Services from "./components/Services";
import Clients from "./components/Clients";

const Home = () => {
  return (
    <>
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/hero.png')" }}
    >
      <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Explore the world with us
        </h1>
        <p className="text-lg md:text-xl mb-6 text-white">
          Discover amazing places at exclusive deals
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full transition hover:bg-blue-500">
          Get Started
        </button>
      </div>
    </div>
    <PopularDestination />
    <Services/>
    <Clients/>
    </>
  );
};

export default Home;
