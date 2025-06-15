import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="p-4 md:p-8 flex flex-col lg:flex-row justify-between items-center gap-8">
      <div className="max-w-2xl text-center lg:text-left">
        <h1 className="text-6xl lg:text-8xl font-bold">
          Karadutlu
          <br />
          Dondurma
        </h1>
        <p className="my-6">
          Karadutlu Dondurma, doğanın en taze lezzetlerinden ilham alarak
          üretilen eşsiz bir tatlı deneyimi sunar. Özenle seçilmiş karadutlar,
          yoğun ve ferahlatıcı aromasıyla her lokmada doğal bir serinlik hissi
          yaratır.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <button className="bg-white text-red-700 px-6 py-2 rounded-full font-semibold">
            Sipariş Et
          </button>
          <button className="border border-white text-white px-6 py-2 rounded-full font-semibold">
            Rezervasyon
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-white p-4 rounded-xl shadow-lg text-gray-800 w-full max-w-xs text-left">
          <div className="flex items-center gap-4">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="User Esra"
            />
            <div>
              <h3 className="font-bold">Esra</h3>
              <div className="flex text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm">
            "Karşı konulmaz dondurma lezzetlerimizle donmuş mutluluğun tadını
            çıkarın!"
          </p>
        </div>
        <BsThreeDotsVertical className="text-white text-3xl" />
      </div>
    </div>
  );
};

export default Hero;
