import React from 'react';
import useGetData from '../hooks/useGetData';
import { customerList } from '../interfaces/customerList';

function CustomerListPage() {
  const { data } = useGetData(
    'https://my-json-server.typicode.com/artworkjpm/customer-db/db'
  );

  return (
    <div>
      <h1>Customer Leads</h1>
      <table className="items-center w-full bg-transparent border-collapse bg-pink-900 text-white mt-4">
        <thead>
          <tr className="border-b">
            <th className="border-r px-6 align-middle border border-solid py-3  uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
              First Name
            </th>
            <th className="border-r px-6 align-middle border border-solid py-3  uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
              Last Name
            </th>
            <th className="border-r px-6 align-middle border border-solid py-3  uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
              Email
            </th>
            <th className="border-r px-6 align-middle border border-solid py-3  uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
              Phone
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item: customerList, index: number) => {
              return (
                <tr className="border-b" key={index}>
                  <td className="border-r px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4">
                    {item.first_name}
                  </td>
                  <td className="border-r px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4">
                    {item.last_name}
                  </td>
                  <td className="border-r px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4">
                    {item.email}
                  </td>
                  <td className="border-r px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4">
                    {item.phone_number}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerListPage;
