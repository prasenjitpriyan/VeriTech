import logo from "../assets/1.jpeg";

const DevelopmentTwo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="border rounded-lg border-red-400 flex flex-col items-center p-5">
        <img className="w-20 h-20 rounded-full mb-5" src={logo} />
        <h1 className="uppercase">Goutam Das</h1>
        <p className="text-sm sm:text-xs">Software Engineer</p>
      </div>
      <div className="border rounded-lg border-red-400 flex flex-col items-center p-5">
        <img className="w-20 h-20 rounded-full mb-5" src={logo} />
        <h1 className="uppercase">Abhijit Das</h1>
        <p className="text-sm sm:text-xs">Software Engineer</p>
      </div>
      <div className="border rounded-lg border-red-400 flex flex-col items-center p-5">
        <img className="w-20 h-20 rounded-full mb-5" src={logo} />
        <h1 className="uppercase">Trisha Das</h1>
        <p className="text-sm sm:text-xs">Software Engineer</p>
      </div>
    </div>
  );
};

export default DevelopmentTwo;
