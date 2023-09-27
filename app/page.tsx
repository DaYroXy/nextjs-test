'use client'

import { useRouter } from "next/navigation"

export default function Home() {

  const router = useRouter();

  return (
    <main>
      <h1>Hello World!</h1>
      
      <br /><br /><br />
      <button className='ml-5 btn btn-primary'
              onClick={() => router.push('/users')} >Click Me!</button>
    </main>
  )
}
