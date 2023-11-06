import StartShowing from "../StartShowing";

const BasicProductInfo = () => {
  return (
    <>
      {/* border-2 border-red-400  */}
      <div className="w-full">
        {/* this for more than 750px */}
        <div className="w-[98%] mx-auto flex 750px:flex-col gap-y-1 300px:flex-col-reverse  300px:px-2 750px:px-0 750px:border-b-[1px] 750px:border-[#8080805c] 750px:pb-3">
          <h3 className="text-start 750px:text-xl 300px:text-[14px]  font-semibold text-gray-500 ">
            Fire-Boltt Talk 2 Pro Ultra 1.39 Round Display Stainless Steel
            Luxury Smart Watch, Bluetooth Calling & 360 Health Monitoring, 123
            Sports Modes, Inbuilt Voice Assistant (Black)
          </h3>

          <div className=" flex 750px:flex-col 300px:flex-row gap-y-0 300px:text-[14px] 750px:text-[16px] 300px:font-semibold 750px:font-normal 300px:justify-between">
            <div className="text-[#0875ca] hover:text-[#e57e3e] hover:underline cursor-pointer">
              Visit the Fire-Boltt Store
            </div>
            <div className="flex flex-row 750px:gap-x-10  300px:gap-x-2 300px:justify-start 750px:justify-start">
              <div className="flex flex-row gap-x-2 items-center">
                <div className="300px:hidden 750px:block">4.2</div>
                <div>
                  <StartShowing star="4.6"></StartShowing>
                </div>
              </div>
              <div className="flex flex-row gap-x-[2px] items-center ">
                <div>4500</div>

                <div className="300px:hidden 750px:block">ratings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicProductInfo;
