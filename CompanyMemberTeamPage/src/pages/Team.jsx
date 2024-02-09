import { Link } from "react-router-dom";
import Leadership from "../components/Leadership";
import Vp from "../components/Vp";
import DevelopmentOne from "../components/DevelopmentOne";
import DevelopmentTwo from "../components/DevelopmentTwo";
import SalesMarketingOne from "../components/SalesMarketingOne";
import SalesMarketingTwo from "../components/SalesMarketingTwo";

const Team = () => {
  return (
    <div className="min-h-screen bg-base-200 text-pretty border-4 border-red-400">
      <div className="mb-5">
        <h1 className="text-center p-5 font-semibold text-2xl">
          MEET OUR TEAM
        </h1>
        <p className="text-center bg-red-400 text-white p-4 uppercase">
          Leadership / Management Team
        </p>
      </div>
      <div className="p-5 max-w-auto">
        <Leadership />
      </div>
      <div className="mb-5 p-5 max-w-auto">
        <Vp />
      </div>
      <div className="mb-5">
        <p className="text-center bg-red-400 text-white p-4 uppercase">
          Development Team
        </p>
      </div>
      <div className="p-5 max-w-auto">
        <DevelopmentOne />
      </div>
      <div className="p-5 max-w-auto">
        <DevelopmentTwo />
      </div>
      <div className="mb-5">
        <p className="text-center bg-red-400 text-white p-4 uppercase">
          Sales and Marketing Team
        </p>
      </div>
      <div className="p-5 max-w-auto">
        <SalesMarketingOne />
      </div>
      <div className="p-5 max-w-auto">
        <SalesMarketingTwo />
      </div>
      <div className="cursor-pointer">
        <p className="text-center bg-red-400 text-white p-4 uppercase">
          <Link to="/">Home</Link>
        </p>
      </div>
    </div>
  );
};

export default Team;
