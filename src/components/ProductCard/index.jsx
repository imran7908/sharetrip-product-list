import { useState } from "react";
import { CardButton } from "./CardButton";
import { Discount } from "./Discount";

export function ProductCard({
  images,
  title,
  category,
  price,
  discountPercentage,
}) {
  const [cartQuantity, setCartQuantity] = useState(0);

  let discountedPrice = 0,
    discountAmount = 0;
  if (discountPercentage) {
    discountAmount = ((discountPercentage / 100) * price).toFixed(2);
    discountedPrice = (price - discountAmount).toFixed(2);
  }

  return (
    <div className="max-w-[210px] drop-shadow-md lg:drop-shadow-none w-full p-1 lg:hover:drop-shadow-md group bg-white rounded-lg">
      <div className="relative flex justify-center">
        {discountPercentage && <Discount discountAmount={discountAmount} />}

        <button>
          <img
            src="/wishlist.svg"
            alt="Wishlist"
            className="absolute right-3 top-3 lg:hidden lg:group-hover:block"
          />
        </button>

        <img
          src={images?.[0]}
          alt={title}
          height={210}
          width={210}
          loading="lazy"
          className="rounded-lg bg-[#9e9b9c] lg:bg-[#ece6e8] object-contain aspect-square lg:group-hover:bg-[#9e9b9c] cursor-pointer"
        />

        <div className="absolute bottom-3 flex lg:hidden lg:group-hover:flex flex-col gap-2 w-[90%]">
          <CardButton
            btnText="Add to Cart"
            iconSrc="/cart.svg"
            quantity={cartQuantity}
            setCartQuantity={setCartQuantity}
          />
          <CardButton btnText="Quick view" iconSrc="/eye.svg" />
        </div>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <p className="text-[0.875rem] text-[#5A6573] capitalize">{category}</p>
        <div className="text-[#1A2B3D] h-[44px] line-clamp-2 font-[525]">
          <a href="#">{title}</a>
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-[1.25rem] font-[475] text-[#1882FF]">
            <span className="font-[525]">৳</span>{" "}
            {discountPercentage ? discountedPrice : price}
          </p>
          {discountPercentage && (
            <p className="line-through text-[0.875rem] text-[#77818C]">
              {price}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
