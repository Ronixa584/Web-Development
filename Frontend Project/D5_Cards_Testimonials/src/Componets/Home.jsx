import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import { Tastimonials } from "./Tastimonials";
import Cards from "./Cards"

export const Home = () => {
  const backgroundImageUrl = "./bg6.jpg";

  //League data
  const leagueData = [
    {
      ImgSrc: "./b1.jpg",
      leagueName: "Premier League",
      country: "England",
      description: "The top professional football league in England.",
    },
    {
      ImgSrc: "./b2.jpg",
      leagueName: "La Liga",
      country: "Spain",
      description: "The top professional football league in Spain.",
    },
    {
      ImgSrc: "./b3.jpg",
      leagueName: "Serie A",
      country: "Italy",
      description: "The top professional football league in Italy.",
    },
    {
      ImgSrc: "./b4.jpg",
      leagueName: "Bundesliga",
      country: "Germany",
      description: "The top professional football league in Germany.",
    },
    {
      ImgSrc: "./b5.jpg",
      leagueName: "Ligue 1",
      country: "France",
      description: "The top professional football league in France.",
    },
    {
      ImgSrc: "./b6.jpg",
      leagueName: "Argentine Primera División",
      country: "Argentina",
      description: "The top professional football league in Argentina.",
    },
    {
      ImgSrc: "./b7.jpg",
      leagueName: "Brasileirão Serie A",
      country: "Brazil",
      description: "The top professional football league in Brazil.",
    },
    {
      ImgSrc: "./b8.jpg",
      leagueName: "Eredivisie",
      country: "Netherlands",
      description: "The top professional football league in the Netherlands.",
    },
    {
      ImgSrc: "./b9.jpg",
      leagueName: "Primeira Liga",
      country: "Portugal",
      description: "The top professional football league in Portugal.",
    },
    {
      ImgSrc: "./b10.jpg",
      leagueName: "Süper Lig",
      country: "Turkey",
      description: "The top professional football league in Turkey.",
    },
  ];

  return (
    <div className="bg-black">
      <Header />

      <div
        className="min-h-screen  flex  justify-start items-center md:justify-start md:items-center z-40"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="md:w-1/2 md:px-8 text-center  md:text-left px-4 w-full ">
          <h2 className="text-6xl font-extrabold mb-4 pb-3 text-transparent bg-clip-text bg-gradient-to-br from-amber-600 via-amber-200 to-yellow-600 sm:bg-gradient-to-br sm:from-amber-200 sm:via-amber-500 sm:to-yellow-100">
            Feel the Heat, Feel the Beat - It's ISL Time!
          </h2>
          <div className=" pt-6">
            <Link
              src="/"
              class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-amber-200"
            >
              <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-200 via-amber-600 to-yellow-100"></span>
              <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span class="relative text-white">Lets Play Football..</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-20">
        <div className="text-4xl font-extrabold text-white text-center pt-6">
          Bast Football Leagues in the World!
        </div>
        <div className="border border-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3 pt-20 pb-3">
          {leagueData.map((league, index) => (
            <Cards key={index} {...league} />
          ))}
        </div>
      </div>

      <Tastimonials />

      <Footer />
    </div>
  );
};


    




