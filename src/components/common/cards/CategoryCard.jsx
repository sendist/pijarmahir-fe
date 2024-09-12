const CategoryCard = ({ categoryId, imageUrl, name }) => {
  return (
    <div className="max-w-[388px] max-h-[290px] rounded-2xl overflow-hidden">
      <img
        className="max-w-full max-h-[240px] object-cover rounded-xl"
        src={imageUrl}
        alt={name}
      />
      <div className="text-center py-[10px]">
        <p className="font-medium headline text-neutral-n900">{name}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
