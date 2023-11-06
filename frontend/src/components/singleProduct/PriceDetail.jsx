const PriceDetail = () => {
  return (
    <>
      <div className="w-[98%] mx-auto 300px:mt-4 750px:mt-0 flex flex-col gap-y-3 py-4 750px:border-b-[1px] 750px:border-[#8080805c]">
        <div className="w-full flex flex-col gap-y-1">
          <span className="p-2 bg-[#bc0303] text-center text-white font-semibold 750px:text-[16px] 300px:text-[14px]  1100px:w-[22%] 750px:w-[38%] 1000px:w-[30%] 500px:w-[32%]  300px:w-[45%] rounded-md cursor-pointer">
            Grate Indian Festival
          </span>
          <div className="flex flex-row items-center gap-x-4">
            <span className="text-3xl text-red-500 font-thin">-40%</span>
            <div className="flex flex-row gap-x-1 font-semibold">
              <span>₹</span>
              <span className="font-normal text-3xl">4,500</span>
            </div>
          </div>
          <div className="flex flex-row gap-x-1 text-gray-400 text-[14px]">
            <span>M.R.P.:</span>
            <del className="font-normal ">8,000</del>
          </div>
        </div>

        <div className="w-full flex flex-col gap-y-1">
          <div>Inclusive of all taxes</div>
          <div className="flex flex-row gap-x-2">
            <span className="font-semibold">EMI</span>
            <span>starts at ₹116. No Cost EMI available</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceDetail;
