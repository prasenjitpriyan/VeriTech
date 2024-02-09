import logo from "../assets/1.jpeg";

const Vp = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="border rounded-lg border-red-400 flex flex-col items-center p-5">
        <img className="w-20 h-20 rounded-full mb-5" src={logo} />
        <h1 className="uppercase">Pradipta Das</h1>
        <p className="text-sm sm:text-xs">VP, Development & Growth</p>
      </div>
      <div className="border rounded-lg border-red-400 flex flex-col items-center p-5">
        <img className="w-20 h-20 rounded-full mb-5" src={logo} />
        <h1 className="uppercase">Mou Das</h1>
        <p className="text-sm sm:text-xs">VP, Sales & Marketing</p>
      </div>
      <div className="border rounded-lg border-red-400 flex flex-col items-center p-5">
        <img className="w-20 h-20 rounded-full mb-5" src={logo} />
        <h1 className="uppercase">Dhriti Das</h1>
        <p className="text-sm sm:text-xs">VP, Finance & Operation</p>
      </div>
    </div>
  );
};

export default Vp;
