import React from 'react'
import Image from 'next/image';
import Link from 'next/link'


const Drnav = () => {
    return (
<div>

    {/* Doctor Navigation.................................................................. */}
        <div className=' flex flex-col w-full -z-50 items-end justify-center px-[10%] py-12'>

            <p className='  py-12 sm:py-5 sm:text-xs md:text-md text-lg text-gray-300 '>پزشکان مجرب</p>

            <div className="grid grid-cols-4 gap-4 sm:grid-cols-2   md:grid-cols-3 ">
                    
            {/* .................................................................. */}    
                <div className='relative  row-span-3 bg-slate rounded-xl transition delay-150 max-h-96 duration-500
                hover:scale-110 scale-100 brightness-50 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
                <Image src='/images/drr2.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md   w-full h-full drop-shadow-2xl  object-cover'/>

                <Link href='/doctors/Drrad' >             
                    <button className='w-full h-2/6 space-y-2 absolute bottom-0 bg-[#080b28d8]  rounded-sm' >
                    <h1 className='sm:text-xs md:text-sm text-lg text-right px-2   text-gray-100'>متخصص مغز و اعصاب</h1>
                    <h2 className='sm:text-xs md:text-sm text-lg text-right px-2   text-gray-100'>نوبت گیری</h2> 
                    </button>   
                </Link>   
                </div>
                            {/* <div className='group w-full'>
                                <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                            </div> */}
                    
            {/* .................................................................. */}          
                    <div className='relative  row-span-3 bg-slate rounded-xl transition delay-150 max-h-96 duration-500
                     hover:scale-110 scale-100 brightness-50 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
                         <Image src='/images/drr1.jpg' width='400' height='600' alt=''  className='rounded-md  w-full h-full drop-shadow-2xl  object-cover'/>
                
                <Link href='/doctors/Drrad' >      
                    <button className='w-full h-2/6 space-y-2 absolute bottom-0 bg-[#080b28d8] rounded-sm' >
                    <h1 className='sm:text-xs md:text-sm text-lg text-right px-2  text-gray-100'>متخصص مغز و اعصاب</h1>
                    <h2 className='sm:text-xs md:text-sm text-lg text-right px-2  text-gray-100'>نوبت گیری</h2> 
                    </button>  
                </Link> 
                </div>

            {/* .................................................................. */}      
                <div className='relative  row-span-3 bg-slate rounded-xl transition delay-150 max-h-96 duration-500
                hover:scale-110 scale-100 brightness-50 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
                <Image src='/images/drr2.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md   w-full h-full drop-shadow-2xl  object-cover'/>
                   
                <button className='w-full h-2/6 space-y-2 absolute bottom-0 bg-[#080b28d8] rounded-sm' >
                    <h1 className='sm:text-xs md:text-sm text-lg text-right px-2  text-gray-100'>متخصص مغز و اعصاب</h1>
                    <h2 className='sm:text-xs md:text-sm text-lg text-right px-2  text-gray-100'>نوبت گیری</h2> 
                    </button>   
               
                </div>
                
            {/* .................................................................. */}  
                <div className='relative  row-span-3 bg-slate rounded-xl transition delay-150 max-h-96 duration-500
                hover:scale-110 scale-100 brightness-50 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
                <Image src='/images/drr1.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md  w-full h-full drop-shadow-2xl  object-cover'/>
                   
                  <button className='w-full h-2/6 space-y-2 absolute bottom-0 bg-[#080b28d8] rounded-sm' >
                     <h1 className='sm:text-xs md:text-sm text-lg text-right px-2  text-gray-100'>متخصص مغز و اعصاب</h1>
                     <h2 className='sm:text-xs md:text-sm text-lg text-right px-2  text-gray-100'>نوبت گیری</h2> 
                     </button>   
                </div>

            {/* .................................................................. */}  
                <div className='relative  row-span-3 bg-slate rounded-xl transition delay-150 max-h-96 duration-500
                hover:scale-110 scale-100 brightness-50 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
                <Image src='/images/drr2.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md   w-full h-full drop-shadow-2xl  object-cover'/>
                   
                <button className='w-full h-2/6 space-y-2 absolute bottom-0 bg-[#080b28d8] rounded-sm' >
                    <h1 className='sm:text-xs md:text-sm text-lg text-right px-2  text-gray-100'>متخصص مغز و اعصاب</h1>
                    <h2 className='sm:text-xs md:text-sm text-lg text-right px-2  text-gray-100'>نوبت گیری</h2> 
                    </button>   

                </div>

            {/* .................................................................. */}      
                <div className='relative  row-span-3 bg-slate rounded-xl transition delay-150 max-h-96 duration-500
                hover:scale-110 scale-100 brightness-50 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
                <Image src='/images/drr1.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md   w-full h-full drop-shadow-2xl  object-cover'/>
                   
                    <button className='w-full h-2/6 space-y-2 absolute bottom-0 bg-[#080b28d8] rounded-sm' >
                    <h1 className='sm:text-xs md:text-sm text-lg text-right px-2  text-gray-100'>متخصص مغز و اعصاب</h1>
                    <h2 className='sm:text-xs md:text-sm text-lg text-right px-2  text-gray-100'>نوبت گیری</h2> 
                    </button>   
                                    
                </div>

            {/* .................................................................. */}  
                <div className='relative  row-span-3 bg-slate rounded-xl transition delay-150 max-h-96 duration-500
                hover:scale-110 scale-100 brightness-50 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
                <Image src='/images/drr2.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md   w-full h-full drop-shadow-2xl  object-cover'/>
                       
                        <button className='w-full h-2/6 space-y-2 absolute bottom-0 bg-[#080b28d8] rounded-sm' >
                        <h1 className='sm:text-xs md:text-sm text-lg text-right px-2  text-gray-100'>متخصص مغز و اعصاب</h1>
                        <h2 className='sm:text-xs md:text-sm text-lg text-right px-2  text-gray-100'>نوبت گیری</h2> 
                        </button>   
                </div>
                      
            {/* .................................................................. */}      
                <div className='relative  row-span-3 bg-slate rounded-xl transition delay-150 max-h-96 duration-500
                hover:scale-110 scale-100 brightness-50 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
                <Image src='/images/drr1.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md   w-full h-full drop-shadow-2xl  object-cover'/>
                            
                <button className='w-full h-2/6 space-y-2 absolute bottom-0 bg-[#080b28d8] rounded-sm' >
                    <h1 className='sm:text-xs md:text-sm text-lg text-right px-2  text-gray-100'>متخصص مغز و اعصاب</h1>
                    <h2 className='sm:text-xs md:text-sm text-lg text-right px-2  text-gray-100'>نوبت گیری</h2> 
                    </button>   
                </div>   


            </div>
        </div>

    

    {/* logo zire dr navigation.................................................................. */}
        <div className='  w-full h-40 flex flex-col py-12 items-center z-20 '>
            <Image className='w-14 sm:w-10 object-contain ' width='100' height='100' alt='online ceo' 
            src='/images/logo.png'/>
            <div className='flex space-x-2'>
                <p className='text-gray-300 sm:text-xs '>power by</p>
                <p className='text-sky-500 sm:text-xs'>ONLINE CEO</p>
            </div>
        </div>   
        





    {/* Poshtibani............................................................................ */}
        <div className='  relative bottom-0 right-0 z-20  w-full'>
            <div className=' bg-[#0e1134]  w-full h-14  px-3 flex   justify-between items-center'>
                <div className='flex items-center space-x-3'>
                    <Image className='w-8 sm:w-4 'width='100'height='100' alt='online ceo' src='/images/ring1.gif' />
                    <p className='text-l sm:text-xs text-gray-300'>09044262926</p>
                </div>
                            
                <div className='flex items-center space-x-3'>
                    <Image className='w-8 sm:w-4 'width='100'height='100' alt='online ceo' src='/images/email1.png' />
                    <p className='text-l sm:text-xs text-gray-300'>@email.com</p>
                </div>
                            
                <div className='flex flex-col  items-center '>
                    <h1 className='sm:text-xs md:text-xs  text-gray-300'>مازندران - میذان ساری  </h1>
                    <h2 className='sm:text-xs md:text-xs  text-gray-300'>خیابان فرهنگ</h2>
                </div>
            </div>
        </div>

    
    


</div>
    )
}
export default Drnav;