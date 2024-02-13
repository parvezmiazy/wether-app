import HeartImage from "../../assets/heart.svg";
// eslint-disable-next-line react/prop-types
export default function Favourite({ onShow }) {
  return (
    <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
      <img src={HeartImage} alt="Heart" />
      <span onClick={onShow}>Favourite Locations</span>
    </div>
  );
}
