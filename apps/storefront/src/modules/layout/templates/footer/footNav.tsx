"use client"

import Link from 'next/link';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import { LogoSolo, ShapeA } from '@modules/assets/assets';



export default function FootNav({cart}:any){
    const page = usePathname();
          const [active, setActive] = useState(false)

          useEffect(() => {
            if (active) {
              document.body.classList.add("menuOn")
            } else {
              document.body.classList.remove("menuOn")
            }

            return () => {
              document.body.classList.remove("menuOn")
            }
          }, [active])

useEffect(()=>{
  closeMenu();
},[page])
          const menuToggle = () =>{
            setActive(!active)
            
        }
     
 
    
    const closeMenu = ()=>{
        setActive(false)
    }

  
    return(

                <React.Fragment>
                   <div onClick={()=>menuToggle()} className={` uppercase mobileBar w-full h-full relative z-[1]  pointer-events-auto  ${active?"opened":""}`}>
                           <div className="w-full h-full relative px-2 py-4 flex flex-col justify-between items-center">
                              <div className="w-full border-b-[3px] border-black h-[1px] singleBar topBar"></div>
                              <div className="w-full  border-b-[3px] border-black h-[1px] singleBar midBar"></div>
                              <div className="w-full border-b-[3px] border-black h-[1px] singleBar botBar"></div>
                           </div>
                  </div>
                  <div className={`top-0 left-0 fixed h-[calc(100dvh-58px)] w-full small:w-3/4 medium:w-2/3 justify-between z-[210] mobileMenu bg-[--paleBlue] flex-col border-[--3px] border-black ${active?"active":""} flex items-end justify-end`}>
                         
                                  <div className="mobileInfo flex-col flex w-5/6 small:w-2/3 h-full  justify-end border-l-[3px] border-black">
                                  <div className="h-auto w-full relative flex-grow-[10] ">
                                  <ShapeA fill="#2aae5a" className="absolute top-0 left-0 w-full h-full z-0 object-fill" preserveAspectRatio="none"/>
                                  <LogoSolo fill="#000000" className="absolute top-0 left-0 w-full h-full z-0 object-fill" preserveAspectRatio="none"/>

                                  </div>
                                  <LocalizedClientLink
                className="w-full py-4 flex items-center justify-center border-t-[3px] border-black bg-[--red]"
                  onClick={()=>closeMenu()}
                href="/products"
                data-testid="nav-account-link "
              >
               <h4> Products</h4>
              </LocalizedClientLink>
              <LocalizedClientLink
                onClick={()=>closeMenu()}
                className="w-full py-4 flex items-center justify-center border-t-[3px] border-black bg-[--white]"
                href="/info"
                data-testid="nav-account-link"
              >
               <h4> Info</h4>
              </LocalizedClientLink>
              <a
              onClick={()=>closeMenu()}
                className="w-full py-4 flex items-center justify-center border-t-[3px] border-black bg-[--yellow]"
                href="https://bigcaf.com/"
                target="_blank"
                data-testid="nav-account-link"
              >
               <h4> Festival</h4>
              </a>
              <LocalizedClientLink
                onClick={()=>closeMenu()}
                className="w-full py-4 flex items-center justify-center border-t-[3px] border-black bg-[--orange]"
                href="/account "
                data-testid="nav-account-link"
              >
               <h4> Account</h4>
              </LocalizedClientLink>
              <LocalizedClientLink
              onClick={()=>closeMenu()}
                  className="w-full py-4 flex items-center justify-center border-t-[3px] border-black bg-[--paleBlue]"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <h4>Cart {`(${cart?.items?.length || 0})`}</h4>
                </LocalizedClientLink>
            </div>
           
                               
                       
                        
                  </div>
                </React.Fragment>

                 
           
            
    

         
      
    );
}