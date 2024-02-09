import logo from "../assets/1.jpeg";

const Leadership = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="border rounded-lg border-red-400 flex flex-col items-center p-5">
        <img className="w-20 h-20 rounded-full mb-5" src={logo} />
        <h1 className="uppercase">Prasenjit Das</h1>
        <p className="text-sm sm:text-xs">Founder // CEO</p>
      </div>
      <div className="border rounded-lg border-red-400 flex flex-col items-center p-5">
        <img className="w-20 h-20 rounded-full mb-5" src={logo} />
        <h1 className="uppercase">Priyan Das</h1>
        <p className="text-sm sm:text-xs">Founder // CEO</p>
      </div>
    </div>
  );
};

export default Leadership;
