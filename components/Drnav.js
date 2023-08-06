import React from 'react'
import Image from 'next/image';
import {BsArrowRightShort} from 'react-icons/bs';


const Drnav = () => {
    return (
         <div className=' flex flex-col w-full -z-50 items-end justify-center px-[10%]'>

                <p className='  px-2 py-6 sm:py-5 sm:text-xs md:text-sm text-lg text-gray-200 '>پزشکان مجرب</p>

                <div className="grid grid-cols-4 gap-4 sm:grid-cols-2  p-3 md:grid-cols-3 ">
                    
                <div className='relative  row-span-3 bg-slate rounded-xl transition delay-150 max-h-96 duration-500
                hover:scale-110 scale-100 brightness-50 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
                <Image src='/images/drr3.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md   w-full h-full drop-shadow-2xl  object-cover'/>
                                  
                    <button className='w-full h-2/6 space-y-2 absolute bottom-0 bg-slate-100 rounded-sm' >
                    <h1 className='sm:text-xs md:text-xs text-sm text-right px-2  '>متخصص مغز و اعصاب</h1>
                    <h2 className='sm:text-xs md:text-xs text-sm text-right px-2  '>نوبت گیری</h2> 
                    </button>   
                   
                </div>

                            {/* <div className='group w-full'>
                                <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                            </div> */}
                    
                    
                    <div className='relative  row-span-3 bg-slate rounded-xl transition delay-150 max-h-96 duration-500
                     hover:scale-110 scale-100 brightness-50 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
                         <Image src='/images/drr1.jpg' width='400' height='600' alt=''  className='rounded-md  w-full h-full drop-shadow-2xl  object-cover'/>
                   
                    <button className='w-full h-2/6 space-y-2 absolute bottom-0 bg-slate-100 rounded-sm' >
                    <h1 className='sm:text-xs md:text-xs text-sm text-right px-2  '>متخصص مغز و اعصاب</h1>
                    <h2 className='sm:text-xs md:text-xs text-sm text-right px-2  '>نوبت گیری</h2> 
                    </button>   
                </div>

                
                <div className='relative  row-span-3 bg-slate rounded-xl transition delay-150 max-h-96 duration-500
                hover:scale-110 scale-100 brightness-50 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
                <Image src='/images/drr2.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md   w-full h-full drop-shadow-2xl  object-cover'/>
                   
                <button className='w-full h-2/6 space-y-2 absolute bottom-0 bg-slate-100 rounded-sm' >
                    <h1 className='sm:text-xs md:text-xs text-sm text-right px-2  '>متخصص مغز و اعصاب</h1>
                    <h2 className='sm:text-xs md:text-xs text-sm text-right px-2  '>نوبت گیری</h2> 
                    </button>   
               
                </div>
                

                <div className='relative  row-span-3 bg-slate rounded-xl transition delay-150 max-h-96 duration-500
                hover:scale-110 scale-100 brightness-50 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
                <Image src='/images/drr1.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md  w-full h-full drop-shadow-2xl  object-cover'/>
                   
                  <button className='w-full h-2/6 space-y-2 absolute bottom-0 bg-slate-100 rounded-sm' >
                     <h1 className='sm:text-xs md:text-xs text-sm text-right px-2  '>متخصص مغز و اعصاب</h1>
                     <h2 className='sm:text-xs md:text-xs text-sm text-right px-2  '>نوبت گیری</h2> 
                     </button>   
                </div>


                <div className='relative  row-span-3 bg-slate rounded-xl transition delay-150 max-h-96 duration-500
                hover:scale-110 scale-100 brightness-50 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
                <Image src='/images/drr2.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md   w-full h-full drop-shadow-2xl  object-cover'/>
                   
                <button className='w-full h-2/6 space-y-2 absolute bottom-0 bg-slate-100 rounded-sm' >
                    <h1 className='sm:text-xs md:text-xs text-sm text-right px-2  '>متخصص مغز و اعصاب</h1>
                    <h2 className='sm:text-xs md:text-xs text-sm text-right px-2  '>نوبت گیری</h2> 
                    </button>   

                </div>

                
                <div className='relative  row-span-3 bg-slate rounded-xl transition delay-150 max-h-96 duration-500
                hover:scale-110 scale-100 brightness-50 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
                <Image src='/images/drr1.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md   w-full h-full drop-shadow-2xl  object-cover'/>
                   
                    <button className='w-full h-2/6 space-y-2 absolute bottom-0 bg-slate-100 rounded-sm' >
                    <h1 className='sm:text-xs md:text-xs text-sm text-right px-2  '>متخصص مغز و اعصاب</h1>
                    <h2 className='sm:text-xs md:text-xs text-sm text-right px-2  '>نوبت گیری</h2> 
                    </button>   
                                    
                </div>


                <div className='relative  row-span-3 bg-slate rounded-xl transition delay-150 max-h-96 duration-500
                hover:scale-110 scale-100 brightness-50 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
                <Image src='/images/drr3.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md   w-full h-full drop-shadow-2xl  object-cover'/>
                       
                        <button className='w-full h-2/6 space-y-2 absolute bottom-0 bg-slate-100 rounded-sm' >
                        <h1 className='sm:text-xs md:text-xs text-sm text-right px-2  '>متخصص مغز و اعصاب</h1>
                        <h2 className='sm:text-xs md:text-xs text-sm text-right px-2  '>نوبت گیری</h2> 
                        </button>   
                </div>
                      
                
                <div className='relative  row-span-3 bg-slate rounded-xl transition delay-150 max-h-96 duration-500
                hover:scale-110 scale-100 brightness-50 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
                <Image src='/images/drr2.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md   w-full h-full drop-shadow-2xl  object-cover'/>
                            
                <button className='w-full h-2/6 space-y-2 absolute bottom-0 bg-slate-100 rounded-sm' >
                    <h1 className='sm:text-xs md:text-xs text-sm text-right px-2  '>متخصص مغز و اعصاب</h1>
                    <h2 className='sm:text-xs md:text-xs text-sm text-right px-2  '>نوبت گیری</h2> 
                    </button>   
                </div>   


            </div>
         </div>
    )
}
export default Drnav;