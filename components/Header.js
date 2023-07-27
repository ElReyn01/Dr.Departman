import React, { useState } from 'react'
import Image from 'next/image';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import Drawer from '../components/Drawer';

const Header = () => {


  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
<div>    
<div className='fixed z-50 top-0 left-0 w-full '>

<div className='flex justify-between h-14
bg-[#0e113452] w-full items-center px-[2%]'>

{/* logo aval.......................  */}
<div className='flex space-x-2 items-center'>
<Image className='w-10 object-contain ' width='100' height='100'  alt='online ceo'
src='/images/logo.png'/>
<p className='text-xl font-bold sm:text-sm md:text-md text-gray-300'>Dr.Departman</p>
</div>








<div>
 {/* drawer........................ */}
<button onClick={handleOpen}>
<RiMenuUnfoldFill className='text-white text-2xl mx-4'/>
</button>
<Drawer isOpen={isOpen} onClose={handleClose} />
</div>
</div>
</div>
</div>   
   
   
   
   
   
   
   
   )
   
   
   
}

export default Header;