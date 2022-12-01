 import Head from 'next/head'
import Image from 'next/image'
import FloatingMenu from '../components/floatingMenu'
import Mapwrapper from '../components/mapwrapper'
import dynamic from 'next/dynamic'

export default function Home() {
  return (
    <div className='megaWrapper' >
      
      <Mapwrapper></Mapwrapper>
      <FloatingMenu/>
    </div>
  )
}
// 