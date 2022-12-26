function OrderDetail() {
  return (
    <div className="mx-4">
      <div className="w-full">
        <div className="p-2 bg-gray-100 rounded-full">
          <h1 className="ml-2 font-bold uppercase">Order Details</h1>
        </div>
        <div className="p-4">
          <div className="flex justify-between border-b text-base">
            <div className="lg:px-4 lg:py-2 m-2 font-bold text-center text-gray-800">
              Subtotal
            </div>
            <div className="lg:px-4 lg:py-2 m-2 font-bold text-center text-gray-900">
              3000
            </div>
          </div>

          <div className="flex justify-between pt-4 border-b text-base">
            <div className="lg:px-4 lg:py-2 m-2 font-bold text-center text-gray-800">
              VAT 10%
            </div>
            <div className="lg:px-4 lg:py-2 m-2 font-bold text-center text-gray-900">
              300
            </div>
          </div>
          <div className="flex justify-between pt-4 border-b text-base">
            <div className="lg:px-4 lg:py-2 m-2 font-bold text-center text-gray-800">
              Total
            </div>
            <div className="lg:px-4 lg:py-2 m-2 font-bold text-center text-gray-900">
              3300
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
