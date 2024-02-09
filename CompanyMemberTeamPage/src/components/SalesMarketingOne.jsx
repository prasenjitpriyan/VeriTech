import logo from "../assets/1.jpeg";

const SalesMarketingOne = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="border rounded-lg border-red-400 flex flex-col items-center p-5">
        <img className="w-20 h-20 rounded-full mb-5" src={logo} />
        <h1 className="uppercase">Manika Das</h1>
        <p className="text-sm sm:text-xs">Team Lead</p>
      </div>
      <div className="border rounded-lg border-red-400 flex flex-col items-center p-5">
        <img className="w-20 h-20 rounded-full mb-5" src={logo} />
        <h1 className="uppercase">Raju Das</h1>
        <p className="text-sm sm:text-xs">Sales Officer</p>
      </div>
      <div className="border rounded-lg border-red-400 flex flex-col items-center p-5">
        <img className="w-20 h-20 rounded-full mb-5" src={logo} />
        <h1 className="uppercase">Shreya Nag</h1>
        <p className="text-sm sm:text-xs">Sales Officer</p>
      </div>
      <div className="border rounded-lg border-red-400 flex flex-col items-center p-5">
        <img className="w-20 h-20 rounded-full mb-5" src={logo} />
        <h1 className="uppercase">Puchki Das</h1>
        <p className="text-sm sm:text-xs">Sales Officer</p>
      </div>
    </div>
  );
};

export default SalesMarketingOne;
