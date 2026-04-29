"use client"

import Link from 'next/link';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';



export default function FootNav(){
    const page = usePathname();
          const [active, setActive] = useState(false)


          const menuToggle = () =>{
            setActive(!active)
        }
     
 
    
    const closeMenu = ()=>{
        setActive(false)
    }

  
    return(

                <React.Fragment>
                   <div onClick={()=>menuToggle()} className={` flex uppercase items-center flex-col justify-between mobileBar  w-full h-full relative z-[1]  pointer-events-auto py-2 ${active?"opened":""}`}>
                            <div className="w-full border-b-[3px] border-black h-[1px] singleBar topBar"></div>
                            <div className="w-full  border-b-[3px] border-black h-[1px] singleBar midBar"></div>
                            <div className="w-full border-b-[3px] border-black h-[1px] singleBar botBar"></div>
                  </div>
                  <div className={`top-0 left-0 fixed h-[calc(100dvh-55px)] w-5/6 small:w-1/2 medium:w-1/3 justify-between z-[210] mobileMenu bg-[--orange] flex-col border-[--3px] border-black ${active?"active":""}`}>
                         
                                  <div className="pt-20 mobileInfo  w-full px-2">
                                      
                                  </div>
                       
                        
                  </div>
                </React.Fragment>

                 
           
            
    

         
      
    );
}