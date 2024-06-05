import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";


function Footer() {
  return (
      <>
       <div className="footer__icons flex items-center justify-evenly">
        <div >
        <FaFacebook  className="size-12"/>
         </div>
              <div>
              <IoLogoInstagram   className="size-12 "/>
              </div>
             <div>
              <FaLinkedinIn  className="size-12" />
              </div>
     
            </div>
            <div className="footer__icons flex items-center justify-evenly mt-10" >
              <div>
                <p className="w-[80%]">Send us an Email
info@nasir.co.ke  / keziah@gmail.com
</p>
</div>
<div> 
  <p className="w-[80%]">Visit our office
Freepals,kibera,Nairobi Kenya</p>
</div>
<div>
  <p className="w-[80%]">
Call us
0741843358</p>
</div>

             
            </div>
      </>
    );
  }
  export default Footer;
