import React from "react";
import { FaStar } from "react-icons/fa6";
import Img1 from "../../assets/topselling/Kaido.jpg";
import Img2 from "../../assets/topproducts/luffy.png";
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Kaido",
    rating: 5.0,
    color: "PVC",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Luffy",
    rating: 5.0,
    color: "RESIN",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img1,
    title: "Kaido",
    rating: 5.0,
    color: "RESIN",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img1,
    title: "Kaido",
    rating: 5.0,
    color: "PVC",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img1,
    title: "Kaido",
    rating: 5.0,
    color: "PVC",
    aosDelay: "800",
  },
];
const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/*Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">Sản phẩm đang Hot dành cho bạn</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Sản Phẩm</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            {" "}
            mo taaaaaa, mo taaaaaa, mo taaaaaa
          </p>
        </div>
        {/*Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/*card section */}
            {ProductsData.map((data) => (
              <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className="space-y-3">
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400"/>
                    <span>{data.rating}</span>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
