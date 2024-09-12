const PartnerCard = ({ imageUrl, orgName, courseCount }) => {
  return (
    <div className="max-w-72 max-h-[240px] rounded-2xl p-[10px] overflow-hidden shadow-2xl bg-neutral-n0">
      <img
        className="max-w-[268px] max-h-[151px] object-cover rounded-xl"
        src={imageUrl}
        alt={orgName}
      />
      <div className="text-center pt-4">
        <div className="font-medium body text-neutral-n900">{orgName}</div>
        <p className="pt-2 caption text-neutral-n100">{courseCount} Kursus</p>
      </div>
    </div>
  );
};

export default PartnerCard;
