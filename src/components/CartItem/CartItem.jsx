function CartItem() {
  return (
    <tr>
      <td className="hidden pb-4 md:table-cell">
        <a href="#">
          <img
            src="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"
            className="w-20 rounded"
            alt="Thumbnail"
          />
        </a>
      </td>

      <td>
        <p className="mb-2 md:ml-4">Mens casual shirt</p>
        <form action="" method="POST">
          <button type="submit" className="text-gray-700 md:ml-4">
            <small>(Remove item)</small>
          </button>
        </form>
      </td>

      <td className="text-center mt-6">
        <p>1</p>
      </td>

      <td className="text-right">
        <span className="text-sm lg:text-base font-medium">1500</span>
      </td>
    </tr>
  );
}

export default CartItem;
