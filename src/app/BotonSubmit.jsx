"use client";

export default function BotonSubmit() {
  function handleClick() {
    alert("!Has hecho click!");
  }

  return (
    <div className="py-2 flex justify-center items-center">
      <button
        type="submit"
        onClick={handleClick}
        className="w-fit px-2.5 py-0.5 rounded-md bg-[#360000] text-white hover:{bg-white text-black}"
      >
        Submit
      </button>
    </div>
  );
}
