import CustomButton from '../CustomButton/CustomButton';

function ProductItem({ item: { title, imgUrl, price, colorNumber } }) {
  return (
    <div className="border border-slate-100 shadow-lg">
      <img className="w-full -mt-3 h-96 object-cover" alt="" src={imgUrl} />

      <div className="flex items-center justify-between">
        <h3 className="mt-4 px-2 text-md font-medium text-slate-900">
          {title}
        </h3>
      </div>

      <div className="mt-4 px-2 flex items-center justify-between font-bold">
        <p className="text-green-600">
          BDT <span className="sm:text-xs md:text-lg">{price}</span>
        </p>
        <p className="text-xs uppercase tracking-wide text-blue-600">
          {colorNumber} Colors
        </p>
      </div>

      <CustomButton type="button">
        <span className="text-sm font-medium px-2"> View Details </span>
      </CustomButton>
    </div>
  );
}

export default ProductItem;
