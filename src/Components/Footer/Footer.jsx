import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import{
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon
} from "@heroicons/react/outline"
// import { LocationMarkerOutline } from 'heroicons-react'
const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr/>
        <div className={css.cFooter}>
            <div className={css.logo}>
            <img src={Logo} alt=""/>
            <span>Emart</span>
        </div>
        <div className={css.block}>
            <div className={css.detail}>
                <span>Contact Us</span>
                <span className={css.pngLine}>
                    <LocationMarkerIcon className={css.icon}/>
                    <span>111 north avenue OrLando,FL 32801</span>
                    
                </span>
                <span className={css.pngLine}>
                    {" "}
                    <PhoneIcon className={css.icon}/>
                    <a href="tel:324-432-2341">324-432-2341</a>
                    </span>
                <span className={css.pngLine}>
                    <InboxIcon className={css.icon}/>
                   <a href='mailto:support@Emart.com'>mailto:support@Emart.com</a>
                    
                </span>
            </div>
        </div>
         <div className={css.block}>
         <div className={css.detail}>
             <span>About</span>
             <span className={css.pngLine}>
                 <LoginIcon className={css.icon}/>
                 <span>Sign In</span>
             </span>
         </div>
     </div>
     <div className={css.block}>
         <div className={css.detail}>
             <span>Company</span>
             <span className={css.pngLine}>
                 <UsersIcon className={css.icon}/>
                 <a href='/about'><p>About Us</p>
                 </a>
             </span>
         </div>
     </div>
     <div className={css.block}>
         <div className={css.detail}>
             <span>Resources</span>
             <span className={css.pngLine}>
                 <LinkIcon className={css.icon}/>
                 <span>Safety Privacy & Terms</span>
             </span>
         </div>
     </div>
     </div>
     <div className={css.copyright}>
        <span>Copyright @2022 by Emart, Inc.</span>
        <span>All rights reserved.</span>
        </div> 
            </div>
  )
}

export default Footer
