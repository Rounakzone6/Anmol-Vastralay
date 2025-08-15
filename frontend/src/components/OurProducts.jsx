import React, { useState } from "react";
import { assets } from "../assets/assets";

const OurProducts = () => {
  const navigate = useState();
  return (
    <div className="md:max-w-[90%] mx-auto">
      <div className="flex gap-2 relative py-3 ml-6">
        <p className="text-2xl font-medium not-[]:">Our Products</p>
        <hr className="w-[5vw] border-t-2 absolute left-38 top-7.5" />
      </div>
      <ul className="flex gap-4 flex-wrap items-center justify-center">
        <li className="flex flex-col items-center justify-centercursor-pointer hover:scale-105 transition-all duration-500">
          <img
            onClick={() => navigate("/lehanga")}
            className="w-15 md:w-30 h-15 md:h-30 object-cover rounded-full"
            src={assets.lehanga}
            alt="lehanga"
          />
          <p className="font-medium">Lehanga</p>
        </li>
        <li className="flex flex-col items-center justify-centercursor-pointer hover:scale-105 transition-all duration-500">
          <img
            onClick={() => navigate("/saree")}
            className="w-15 md:w-30 h-15 md:h-30 object-cover rounded-full"
            src={assets.saree}
            alt="saree"
          />
          <p className="font-medium">Saree</p>
        </li>
        <li className="flex flex-col items-center justify-centercursor-pointer hover:scale-105 transition-all duration-500">
          <img
            onClick={() => navigate("/kurti")}
            className="w-15 md:w-30 h-15 md:h-30 object-cover rounded-full"
            src={assets.kurti}
            alt="kurti"
          />
          <p className="font-medium">Kurti</p>
        </li>
        <li className="flex flex-col items-center justify-centercursor-pointer hover:scale-105 transition-all duration-500">
          <img
            onClick={() => navigate("/jeans")}
            className="w-15 md:w-30 h-15 md:h-30 object-cover rounded-full"
            src={assets.jeans}
            alt="jeans"
          />
          <p className="font-medium">Jeans</p>
        </li>
        <li className="flex flex-col items-center justify-centercursor-pointer hover:scale-105 transition-all duration-500">
          <img
            onClick={() => navigate("/kids")}
            className="w-15 md:w-30 object-center h-15 md:h-30 rounded-full"
            src={assets.kids}
            alt="kids"
          />
          <p className="font-medium">Kids</p>
        </li>
        <li className="flex flex-col items-center justify-centercursor-pointer hover:scale-105 transition-all duration-500">
          <img
            onClick={() => navigate("/shirt")}
            className="w-15 md:w-30 h-15 md:h-30 object-cover rounded-full"
            src={assets.shirt}
            alt="shirt"
          />
          <p className="font-medium">Shirt</p>
        </li>
        <li className="flex flex-col items-center justify-centercursor-pointer hover:scale-105 transition-all duration-500">
          <img
            onClick={() => navigate("/shuiting-shirting")}
            className="w-15 md:w-30 h-15 md:h-30 object-cover rounded-full"
            src={assets.shuitingShirting}
            alt="shuiting-shirting"
          />
          <p className="font-medium">Shuiting-Shirting</p>
        </li>
        <li className="flex flex-col items-center justify-centercursor-pointer hover:scale-105 transition-all duration-500">
          <img
            onClick={() => navigate("/underwear")}
            className="w-15 md:w-30 h-15 md:h-30 rounded-full"
            src={assets.underwear}
            alt="underwear"
          />
          <p className="font-medium">Innerwear</p>
        </li>
      </ul>
    </div>
  );
};

export default OurProducts;
