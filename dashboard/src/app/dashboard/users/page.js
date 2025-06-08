import Navbar from '@/components/common/Navbar'

const page = () => {
  const users = [
    {
      _id: '1',
      name: 'John Doe',
      mobileNumber: '1234567890',
      email: 'john@gmail.com',
      suspend: true
    }, {
      _id: '2',
      name: 'Jane Doe',
      mobileNumber: '0987654321',
      email: 'jane@gmail.com',
      suspend: false
    }, {
      _id: '3',
      name: 'John Doe',
      mobileNumber: '1234567890',
      email: 'john@gmail.com',
      suspend: true
    }, {
      _id: '4',
      name: 'Jane Doe',
      mobileNumber: '0987654321',
      email: 'jane@gmail.com',
      suspend: false
    }, {
      _id: '5',
      name: 'John Doe',
      mobileNumber: '1234567890',
      email: 'john@gmail.com',
      suspend: true
    }, {
      _id: '6',
      name: 'Jane Doe',
      mobileNumber: '0987654321',
      email: 'jane@gmail.com',
      suspend: false
    }, {
      _id: '7',
      name: 'John Doe',
      mobileNumber: '1234567890',
      email: 'john@gmail.com',
      suspend: true
    }, {
      _id: '8',
      name: 'Jane Doe',
      mobileNumber: '0987654321',
      email: 'jane@gmail.com',
      suspend: false
    }, {
      _id: '9',
      name: 'John Doe',
      mobileNumber: '1234567890',
      email: 'john@gmail.com',
      suspend: true
    }, {
      _id: '10',
      name: 'Jane Doe',
      mobileNumber: '0987654321',
      email: 'jane@gmail.com',
      suspend: false
    }, {
      _id: '11',
      name: 'John Doe',
      mobileNumber: '1234567890',
      email: 'john@gmail.com',
      suspend: true
    }, {
      _id: '12',
      name: 'Jane Doe',
      mobileNumber: '0987654321',
      email: 'jane@gmail.com',
      suspend: false
    }, {
      _id: '13',
      name: 'John Doe',
      mobileNumber: '1234567890',
      email: 'john@gmail.com',
      suspend: true
    }, {
      _id: '14',
      name: 'Jane Doe',
      mobileNumber: '0987654321',
      email: 'jane@gmail.com',
      suspend: false
    }, {
      _id: '15',
      name: 'John Doe',
      mobileNumber: '1234567890',
      email: 'john@gmail.com',
      suspend: true
    }, {
      _id: '16',
      name: 'Jane Doe',
      mobileNumber: '0987654321',
      email: 'jane@gmail.com',
      suspend: false
    }, {
      _id: '17',
      name: 'John Doe',
      mobileNumber: '1234567890',
      email: 'john@gmail.com',
      suspend: true
    }, {
      _id: '18',
      name: 'Jane Doe',
      mobileNumber: '0987654321',
      email: 'jane@gmail.com',
      suspend: false
    }, {
      _id: '19',
      name: 'John Doe',
      mobileNumber: '1234567890',
      email: 'john@gmail.com',
      suspend: true
    }, {
      _id: '20',
      name: 'Jane Doe',
      mobileNumber: '0987654321',
      email: 'jane@gmail.com',
      suspend: false
    }, {
      _id: '21',
      name: 'John Doe',
      mobileNumber: '1234567890',
      email: 'john@gmail.com',
      suspend: true
    }, {
      _id: '22',
      name: 'Jane Doe',
      mobileNumber: '0987654321',
      email: 'jane@gmail.com',
      suspend: false
    }, {
      _id: '23',
      name: 'John Doe',
      mobileNumber: '1234567890',
      email: 'john@gmail.com',
      suspend: true
    }, {
      _id: '24',
      name: 'Jane Doe',
      mobileNumber: '0987654321',
      email: 'jane@gmail.com',
      suspend: false
    }, {
      _id: '25',
      name: 'John Doe',
      mobileNumber: '1234567890',
      email: 'john@gmail.com',
      suspend: true
    }, {
      _id: '26',
      name: 'Jane Doe',
      mobileNumber: '0987654321',
      email: 'jane@gmail.com',
      suspend: false
    }, {
      _id: '27',
      name: 'John Doe',
      mobileNumber: '1234567890',
      email: 'john@gmail.com',
      suspend: true
    }, {
      _id: '28',
      name: 'Jane Doe',
      mobileNumber: '0987654321',
      email: 'jane@gmail.com',
      suspend: false
    }, {
      _id: '29',
      name: 'John Doe',
      mobileNumber: '1234567890',
      email: 'john@gmail.com',
      suspend: true
    }, {
      _id: '30',
      name: 'Jane Doe',
      mobileNumber: '0987654321',
      email: 'jane@gmail.com',
      suspend: false
    }, {
      _id: '31',
      name: 'John Doe',
      mobileNumber: '1234567890',
      email: 'john@gmail.com',
      suspend: true
    }, {
      _id: '32',
      name: 'Jane Doe',
      mobileNumber: '0987654321',
      email: 'jane@gmail.com',
      suspend: false
    },
  ]
  return (
    <div className="p-4">
      <table className="w-full text-gray-600">
        <thead>
          <tr className='border-b'>
            <th className='text-left'>Name</th>
            <th className='text-center'>Mobile</th>
            <th className='text-center'>Email</th>
            <th className='text-right'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => (
              <tr key={user._id} className="my-4" >
                <td className='py-1 text-lg text-left'>{user.name}</td>
                <td className='py-1 text-lg text-center'>{user.email}</td>
                <td className='py-1 text-lg text-center'>{user.mobileNumber}</td>
                <td className='py-1 text-lg text-right cursor-pointer'>
                  {user.suspend ?
                    <button type="button" className="px-4 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-all cursor-pointer">Unsuspend</button> :
                     <button type="button" className="px-4 rounded-lg text-white transition-all bg-red-500 hover:bg-red-600 cursor-pointer mr-2">Suspend</button>}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default page