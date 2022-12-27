import React from 'react';

function TableRow() {
  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        Apple MacBook Pro 17"
      </th>
      <td className="py-4 px-6">Sliver</td>
      <td className="py-4 px-6">Laptop</td>
      <td className="py-4 px-6">$2999</td>
      <td className="py-4 px-6" />
    </tr>
  );
}

export default TableRow;
