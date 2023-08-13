import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'




const Header = dynamic(() => import('../components/Header'))
const Body = dynamic(() => import('../components/Body'))
const Drnav = dynamic(() => import('../components/Drnav'))

export default function Home() {
  return (

   <div className='h-full flex flex-col'>
   
   <Header/>
   <Body/>
   <div className='z-10'>
   <Drnav />
   </div>

   </div>









        
   
  )
}
