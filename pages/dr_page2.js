import React from 'react'

import dynamic from 'next/dynamic'



const Menu = dynamic(() => import('../components/page2/Menu'))
const Tabage1 = dynamic(() => import('../components/page2/Tabage1'))
const Tabage2 = dynamic(() => import('../components/page2/Tabage2'))
const Tabage3 = dynamic(() => import('../components/page2/Tabage3'))
const Tabage4 = dynamic(() => import('../components/page2/Tabage4'))

const dr_space = () => {
  return (
<div>
<div className='flex flex-col'>




<div>
<Menu/>
</div>

<div className=' py-60 sm:py-52'>
<Tabage1/>
<Tabage2/>
<Tabage3/>
<Tabage4/>
</div> 
  
  


  
</div>  
</div>

    


   
  )
}

export default dr_space;
