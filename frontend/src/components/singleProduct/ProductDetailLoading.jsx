import { DotChartOutlined } from "@ant-design/icons";
import { Skeleton } from "antd";

const ProductDetailLoading = () => {
  return (
    <div className="750px:h-[70vh] 300px:h-[90vh] w-[98%] mt-8 mx-auto flex  750px:flex-row 300px:flex-col gap-4">
      <div className="mt-2 mb-4 300px:block 300px:h-[15%] 750px:hidden ">
        <Skeleton active />
      </div>

      <div className="750px:w-[30%] 300px:w-full 300px:h-[30%] 750px:h-full flex flex-row gap-x-10 300px:mt-6 750px:mt-0">
        <div className="300px:w-full 300px:hidden   750px:w-[35%]  750px:flex flex-col gap-y-10 ">
          <div className="w-[40px] h-[40px] 300px:hidden 750px:block ">
            <Skeleton.Node active={true} className="w-full h-full">
              <DotChartOutlined style={{ fontSize: 40, color: "#bfbfbf" }} />
            </Skeleton.Node>
          </div>
          <div className="w-[40px] h-[40px] mt-8 300px:hidden 750px:block">
            <Skeleton.Node active={true} className="w-full h-full">
              <DotChartOutlined style={{ fontSize: 40, color: "#bfbfbf" }} />
            </Skeleton.Node>
          </div>
          <div className="w-[40px] h-[40px] mt-8 300px:hidden 750px:block">
            <Skeleton.Node active={true} className="w-full h-full">
              <DotChartOutlined style={{ fontSize: 40, color: "#bfbfbf" }} />
            </Skeleton.Node>
          </div>
        </div>
        <div className="300px:w-full 750px:w-[65%] h-[400px] 300px:justify-center 300px:items-center flex flex-col  ">
          <Skeleton.Image
            active={true}
            size="large"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="300px:w-full 750px:w-[70%]">
        <div>
          <Skeleton active />
        </div>
        <div className="mt-6">
          <Skeleton active />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailLoading;
