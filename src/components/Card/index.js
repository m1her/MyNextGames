import Image from "next/image";
const Card = (props) => {
  const handleBgClick = () => {
    if (!props.disabled) {
      props.handleChoice(props.card);
    }
  };
  return (
    <div className="relative">
      <div>
        <Image
          src={props.image}
          width={100}
          height={100}
          className={`border-[#1f0525] border-2 w-28 h-36  py-3 px-4 rounded absolute transition ease-in duration-200
        ${props.color || ""}
        ${props.flipped ? "rotate-y-0 delay-300" : " rotate-y-90 "}
        `}
          alt="props.image"
        />

        <Image
          src="/bg-purple.png"
          width={100}
          height={100}
          className={`border-[#1f0525] border-2 w-28 h-36  rounded delay-200 transition ease-in duration-200
        ${props.color || ""}
        ${props.flipped ? "rotate-y-90 delay-0" : ""}
          `}
          alt="props.image"
          onClick={handleBgClick}
        />
      </div>
    </div>
  );
};
export default Card;
