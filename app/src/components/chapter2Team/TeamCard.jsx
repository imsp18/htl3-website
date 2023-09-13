// eslint-disable-next-line react/prop-types
const TeamCard = ({ imgSrc, name }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full bg-purple-600 p-2">
        <div className="rounded-full h-20 w-20 sm:h-36 sm:w-36 overflow-hidden">
          <img loading="lazy" src={imgSrc} alt="img" className="w-36"/>
        </div>
      </div>
      <span className="text-white text-center font-medium text-sm sm:text-xl">{name}</span>
    </div>
  );
};

export default TeamCard;