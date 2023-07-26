import React from 'react'

import dynamic from 'next/dynamic'



const Header2 = dynamic(() => import('../components/page2/Header2'))
const Menu1 = dynamic(() => import('../components/page2/Menu1'))
const Tabage1 = dynamic(() => import('../components/page2/Tabage1'))
const Tabage2 = dynamic(() => import('../components/page2/Tabage2'))
const Tabage3 = dynamic(() => import('../components/page2/Tabage3'))


const dr_space = () => {
  return (
<div>
<div className='flex flex-col'>




<Header2/>
<Menu1/>
<Tabage1/>
<Tabage2/>
<Tabage3/>  
  
  
  


  
</div>  
</div>

    


   
  )
}

export default dr_space;
