import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'




const Header = dynamic(() => import('../components/Header'))
const Body = dynamic(() => import('../components/Body'))
const Location = dynamic(() => import('../components/Location'))
const Drnav = dynamic(() => import('../components/Drnav'))
const Lastlogo = dynamic(() => import('../components/Lastlogo'))
const Poshtibani = dynamic(() => import('../components/Poshtibani'))

export default function Home() {
  return (
   <div className='h-full flex flex-col'>
   
   <Header/>
   <Body/>
   <Location/>
   <div className='z-10'>
   <Drnav />

   </div>
   <Lastlogo/>
   <div className='  relative bottom-0 right-0 z-20  w-full'>
   <Poshtibani/>
   </div>

 
   
   
   

   
    </div>









        
    
  )
}
