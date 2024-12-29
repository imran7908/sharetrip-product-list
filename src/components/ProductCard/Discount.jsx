// eslint-disable-next-line react/prop-types
export function Discount({ discountAmount }) {
  return (
    <div className="absolute top-3 -left-[10px] hidden group-hover:block">
      <div className="flex">
        <div className="min-w-[53px] h-[24px] rounded-tl-[4px] bg-gradient-to-r from-[#F27D00] to-[#FFA03B] text-white text-[0.75rem] flex items-center justify-center font-[525] px-1">
          <span>- ৳ {discountAmount}</span>
        </div>
        <img src="/tail.svg" alt="Tail" />
      </div>
      <img src="/connector.svg" alt="Connector" />
    </div>
  );
}
