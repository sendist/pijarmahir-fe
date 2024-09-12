import { CiHeart } from "react-icons/ci";
import { GoShareAndroid } from "react-icons/go";

const PurchaseCourseCard = ({ courseId, imageUrl, price }) => {
  return (
    <div className="max-w-[389px] max-h-[533px] rounded-2xl p-4 overflow-hidden shadow-2xl bg-neutral-n0">
      <img
        className="max-w-[356px] max-h-[251px] object-cover rounded-xl"
        src={imageUrl}
        alt={courseId}
      />
      <div className="flex justify-between items-end">
        <div className="pt-4">
          <p className="text-sm">Harga Akses Premium:</p>
          <p className="body font-extrabold">Rp {price}</p>
        </div>

        <div className="flex space-x-4">
          <button>
            <CiHeart className="text-3xl text-pijarBlue-p300" />
          </button>
          <button>
            <GoShareAndroid className="text-3xl text-pijarBlue-p300" />
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 space-y-[10px]">
        <BasicButton
          text="Akses Gratis"
          onClick={() => alert("Akses Gratis")}
          type="outline"
        />
        <BasicButton
          text="Tambahkan ke Keranjang"
          onClick={() => alert("Tambahkan ke Keranjang")}
          type="outline"
        />
        <BasicButton
          text="Tambahkan ke Keranjang"
          onClick={() => alert("Tambahkan ke Keranjang")}
          type="fill"
        />
      </div>
    </div>
  );
};

const BasicButton = ({ text, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      className={`h-12 w-full px-4 outline outline-1 ${
        type !== "outline"
          ? "text-neutral-n0 bg-pijarBlue-p300 hover:bg-pijarBlue-p400"
          : "text-pijarBlue-p300 bg-neutral-n0 hover:bg-neutral-n40"
      } outline-pijarBlue-p300  subtitle font-medium rounded-lg  transition-colors duration-150 ease-in-out`}
    >
      {text}
    </button>
  );
};

export default PurchaseCourseCard;
