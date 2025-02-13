import React from 'react'
import ActionableButton from '../../src/components/ActionableButtton'

interface User {
  id: number,
  userId: number,
  title: string,
  body: string
}

const UsersPage = async () => {

  throw new Error('This is a  manual error')

  const response = await fetch('https://jsonplaceholder.typicode.com/posts',
    // {cache: 'no-store'} (no caching) usefull for data that changes too often
    { next: { revalidate: 10 } }  //get freash data from backend in every 10 sec
  )

  // caching the data is only possible in fetch function provided by next.js
  const users: User[] = await response.json()

  return (
    <section>
      <h1 className='text-slate-700 font-semibold text-lg'>User Page</h1>

      <div className='my-32 grid grid-cols-4 place-items-center gap-5'>

        {users?.map(user =>
          <section key={user.id} className='w-60 h-72 flex flex-col shadow-lg shadow-gray-300 hover:shadow-red-100 rounded-md p-1'>
            <div className='h-1/2 bg-gray-100 rounded-md'></div>
            <div className='p-3 space-y-5'>
              <div>
                <h1>{user?.title}</h1>
                {/* <p>{user?.body}</p> */}
              </div>
              <ActionableButton actions={{ link: '/products', name: 'See Details' }} />
            </div>
          </section>
        )}

      </div>
    </section>
  )
}

export default UsersPage
