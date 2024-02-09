import logo from "../assets/1.jpeg";

const DevelopmentOne = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="border rounded-lg border-red-400 flex flex-col items-center p-5">
        <img className="w-20 h-20 rounded-full mb-5" src={logo} />
        <h1 className="uppercase">Saikat Halder</h1>
        <p className="text-sm sm:text-xs">Team Lead, SE</p>
      </div>
      <div className="border rounded-lg border-red-400 flex flex-col items-center p-5">
        <img className="w-20 h-20 rounded-full mb-5" src={logo} />
        <h1 className="uppercase">Bipasa Dey</h1>
        <p className="text-sm sm:text-xs">Software Engineer</p>
      </div>
      <div className="border rounded-lg border-red-400 flex flex-col items-center p-5">
        <img className="w-20 h-20 rounded-full mb-5" src={logo} />
        <h1 className="uppercase">Arun Halder</h1>
        <p className="text-sm sm:text-xs">Software Engineer</p>
      </div>
      <div className="border rounded-lg border-red-400 flex flex-col items-center p-5">
        <img className="w-20 h-20 rounded-full mb-5" src={logo} />
        <h1 className="uppercase">R. N. Murmu</h1>
        <p className="text-sm sm:text-xs">Software Engineer</p>
      </div>
    </div>
  );
};

export default DevelopmentOne;
