import { FiSearch } from "react-icons/fi";
import IconPijar from "../../assets/pijar-mahir-icon.svg";
import { CiCreditCard1 } from "react-icons/ci";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { LuGraduationCap } from "react-icons/lu";
import { TbBuildingStore } from "react-icons/tb";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white text-gray-800 items-center shadow-md fixed top-0 left-0 right-0">
      <section className="flex justify-center py-4 space-x-8 bg-pijarBlue-p300">
        <div className="flex items-center space-x-2 subtitle font-medium text-white px-1">
          <CiCreditCard1 className="font-bold text-2xl" />
          <p>Pijar Prakerja</p>
        </div>
        <div className="flex items-center space-x-2 subtitle font-medium text-white px-1">
          <TbBuildingSkyscraper className="font-bold text-2xl" />
          <p>Pijar Mahir for Business</p>
        </div>
        <div className="flex items-center space-x-2 subtitle font-medium text-white px-1">
          <LuGraduationCap className="font-bold text-2xl" />
          <p>Pijar Camp</p>
        </div>
        <div className="flex items-center space-x-2 subtitle font-medium text-white px-1">
          <TbBuildingStore className="font-bold text-2xl" />
          <p>Pijar Mahir for UKM</p>
        </div>
      </section>

      <section className="container flex justify-center p-[15px] items-center mx-auto">
        <img src={IconPijar} alt="Pijar Mahir" className="h-12" />

        <div className="subtitle space-x-4 ml-4 xl:space-x-12 xl:ml-12">
          <Link>Kategori</Link>
          <Link>Lowongan Kerja</Link>
          <Link>Non-Course</Link>
        </div>

        {/* Search Bar */}
        <div className="flex flex-grow mx-4 items-center outline outline-slate-200 outline-1 text-gray-800 rounded-md overflow-hidden h-8 max-w-[405px]">
          <input
            type="text"
            placeholder="Cari kursus yang kamu inginkan"
            className="bg-transparent p-4 caption flex-grow focus:outline-none"
          />
          <button className="p-3 bg-slate-200">
            <FiSearch className="text text-gray-500" />
          </button>
        </div>

        {/* Signup and Signin Buttons */}
        <div className="space-x-5 font-medium subtitle">
          <button className="bg-pijarBlue-p300 hover:bg-pijarBlue-p400 text-white py-2 px-7 rounded-md">
            Masuk
          </button>
          <button className="bg-white hover:bg-neutral-n40 text-pijarBlue-p300 outline outline-1 outline-pijarBlue-p300 py-2 px-7 rounded-md">
            Daftar
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
