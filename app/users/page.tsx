import React, { Suspense } from 'react'
import UsersTable from './UsersTable'
import Loading from '../componenets/Loading'

interface Props {
  searchParams: { sortOrder: string }
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Suspense fallback={<Loading />}>
        <UsersTable sortOrder={sortOrder} />
      </Suspense>
    </>
  )
}

export default UsersPage