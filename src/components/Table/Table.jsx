import React from 'react';
import TableRow from '../Table-row/TableRow';

function Table({
  tHeadFirst,
  tHeadSecond,
  tHeadThird,
  tHeadFourth,
  items,
  isUser,
}) {
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
          {isUser
            ? items.map((item) => (
                <TableRow
                  key={item.id}
                  first={item.username}
                  second={item.email}
                  third={item.createdAt}
                  fourth={item.updatedAt}
                />
              ))
            : items.map((item) => (
                <TableRow
                  key={item.id}
                  first={item.attributes.title}
                  second={item.attributes.price}
                  third={item.attributes.stock}
                  fourth={item.attributes.createdAt}
                />
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
