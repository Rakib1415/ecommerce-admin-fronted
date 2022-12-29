import React from 'react';

function TableRow({ first, second, third, fourth }) {
  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {first}
      </th>
      <td className="py-4 px-6">{second}</td>
      <td className="py-4 px-6">{third}</td>
      <td className="py-4 px-6">{fourth}</td>
      <td className="py-4 px-6" />
    </tr>
  );
}

export default TableRow;
