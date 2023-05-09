"use client";


const Square = (props) => {
 
  return (
    <div
      className="w-32 h-32 border-2 border-white text-white text-6xl flex justify-center items-center"
      onClick={props.handleClick}
    >
      {props.value}
    </div>
  );
};
export default Square;
