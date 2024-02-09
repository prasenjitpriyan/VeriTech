import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero min-h-screen bg-hero-pattern border-4 border-red-400 ">
      <div className="hero-content text-center">
        <div className="max-w-md text-text">
          <h1 className="text-5xl font-bold text-red-400">Freddy</h1>
          <p className="py-5 text-white">
            Welcome to Freddy, where a dedicated team of professionals works
            together to bring innovation, creativity and expertise to software
            industry, get to know the individuals who make our company thrive.
          </p>
          <Link
            to="/team"
            className="btn bg-red-400 text-base-200 hover:bg-red-200"
          >
            Meet Our Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
