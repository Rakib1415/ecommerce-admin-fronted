import React from 'react';
import TableRow from '../Table-row/TableRow';

function Table({ tHeadFirst, tHeadSecond, tHeadThird, tHeadFourth }) {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              {tHeadFirst}
            </th>
            <th scope="col" className="py-3 px-6">
              {tHeadSecond}
            </th>
            <th scope="col" className="py-3 px-6">
              {tHeadThird}
            </th>
            <th scope="col" className="py-3 px-6">
              {tHeadFourth}
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
