import Navbar from '@/components/common/Navbar';
import React from 'react'

const page = () => {
  const users = [
    {
      _id: "1",
      name: "John Doe",
      date: "2023-10-01",
      status: "Pending",
    },
    {
      _id: "2",
      name: "Jane Smith",
      date: "2023-10-02",
      status: "Approved",
    },
    {
      _id: "3",
      name: "Alice Johnson",
      date: "2023-10-03",
      status: "Approved",
    },
    {
      _id: "4",
      name: "Bob Brown",
      date: "2023-10-04",
      status: "Pending",
    },
  ];
  return (
    <div className="p-4">
      <Navbar pageName="Users" />
      <table className="w-full text-gray-600">
        <thead>
          <tr className='border-b'>
            <th className='text-left'>Name</th>
            <th className='text-center'>Date</th>
            <th className='text-right'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => (
              <tr key={user._id} className="my-4" >
                <td className='py-1 text-lg text-left'>{user.name}</td>
                <td className='py-1 text-lg text-center'>{user.date}</td>
                <td className='py-1 text-lg text-right'>
                  {user.status === "Pending" ? <button type="button" className="px-4 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-all cursor-pointer">Pending</button> : ""}
                  {user.status === "Approved" ? <button type="button" className="px-4 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-all cursor-pointer">Approved</button> : ""}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default page