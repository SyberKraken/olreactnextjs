 import Head from 'next/head'
import Image from 'next/image'
import FloatingMenu from './floatingMenu'

export default function Home() {
  return (
    <div className='megaWrapper' >
      <FloatingMenu/>
    </div>
  )
}
