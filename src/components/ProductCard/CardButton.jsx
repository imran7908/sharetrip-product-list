/* eslint-disable react/prop-types */
export function CardButton({
  btnText,
  iconSrc,
  className = "",
  quantity = 0,
  setCartQuantity,
}) {
  return (
    <div
      className={`flex justify-center items-center gap-2 w-full border-[1.5px] bg-[#ffffff4d] border-[#ffffff4d] rounded-md text-white backdrop-blur py-[2px] ${
        quantity > 0 ? className : ""
      }`}
    >
      {quantity > 0 ? (
        <>
          <button onClick={() => setCartQuantity(0)}>
            <img src="/delete.svg" alt="Delete" />
          </button>
          <div className="flex gap-1 text-[0.875rem]">
            <p>{quantity}</p>
            <p>Added in Cart</p>
          </div>
          <button onClick={() => setCartQuantity((prev) => prev + 1)}>
            <img src="/plus.svg" alt="Plus" />
          </button>
        </>
      ) : (
        <button
          onClick={() => setCartQuantity((prev) => prev + 1)}
          className="flex justify-center items-center gap-2"
        >
          <img src={iconSrc} alt={btnText} />
          <p className="text-[0.875rem]">{btnText}</p>
        </button>
      )}
    </div>
  );
}
