const Loader = () => {
  return (
    <div className="animation w-20 h-20 relative rounded-full">
      <div className="w-[70%] h-[70%] bg-[#D9D9D9] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-4/12 h-1/2 bg-[#E76767] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded"></div>
      </div>
    </div>
  );
};

export default Loader;
