const CourseCard = ({ courseId, imageUrl, title, subtitle, rating, price }) => {
  return (
    <div className="max-w-72 max-h-[360px] rounded-2xl p-[10px] overflow-hidden shadow-2xl bg-neutral-n0">
      <img
        className="max-w-[268px] max-h-[189px] object-cover rounded-xl"
        src={imageUrl}
        alt={title}
      />
      <div className="pt-4">
        <div className="font-extrabold body text-neutral-n900">{title}</div>
        <p className="pt-2 caption text-neutral-n100">{subtitle}</p>
      </div>
      <div className="flex items-center space-x-2">
        <StarRating rating={rating} />
        <p className="pt-[6px] caption font-extrabold text-neutral-n900">
          {rating}
        </p>
        <p className="pt-[6px] caption text-neutral-n100">({rating} Ulasan)</p>
      </div>
      <div className="py-2 text-right">
        {price === "0" ? (
          <>
            <span className="caption align-top mr-6 text-neutral-n300">
              IDR <strike>{price}</strike>
            </span>
            <span className="body font-extrabold">GRATIS</span>
          </>
        ) : (
          <>
            <span className="body font-medium">IDR </span>
            <span className="body font-extrabold">{price}</span>
          </>
        )}
      </div>
    </div>
  );
};

import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";
const StarRating = ({ rating }) => {
  const totalStars = 5;
  let stars = [];
  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      // Full star
      stars.push(<FaStar key={i} className="text-[#FBB50E] inline text-sm" />);
    } else if (i > rating && i < rating + 1) {
      // Half star
      stars.push(
        <FaStarHalfStroke key={i} className="text-[#FBB50E] inline text-sm" />
      );
    } else {
      // Empty star
      stars.push(
        <FaRegStar key={i} className="text-[#FBB50E] inline text-sm" />
      );
    }
  }
  return <div>{stars}</div>;
};

export default CourseCard;
