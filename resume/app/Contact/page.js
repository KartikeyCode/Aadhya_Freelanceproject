"use client"
import Navbar from "../components/navbar"
import head from "../../public/Contacthead.png"
import arrow from "../../public/contactarrow.png"
import cursor from "../../public/contactcursor.png"
import circles from "../../public/circles.png"
import Image from "next/image"
import { useRef } from "react"
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

export default function Contact(){

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_pknrn5l', 'template_o29tcsl', form.current, '-dVOVSuo0wt7hcXDW')
          .then((result) => {
              console.log(result.text);
              toast.success('Email Sent Succesfully');
          }
          
          , (error) => {
             toast.error('Email could not be sent')
              console.log(error.text);
          });
      };

    return(
        <div className=" min-h-screen w-screen bg-[#F0EDE8]">
            <Navbar/>

            <div className="flex ">

                <div className="flex-col left xl:mt-36 2xl:mt-52 ml-28">

                    <h1 className="text-[#212121] font-NewSpirit text-7xl "> Contact Me. </h1>

                    <h2 className="text-[#373737] font-SegoeUI xl:text-xl 2xl:text-2xl w-[33rem] mt-4 z-20 relative"> 
                        
                        If you’d like to reach out, you can do so in the contact box here. You can also find other contacts listed below.
                         Looking forward to hearing from you! 
                        <br/>
                        
                        <br/>Email: aadhya05may@gmail.com
                        <br/>Instagram: @aad1hya  
                        
                        </h2>

                        <Image src={arrow} className="ml-96 -mt-10" />
                        <Image src={head} className="xl:-mt-[11.9rem] 2xl:-mt-[10.2rem] -ml-20 z-10" />


                </div>

                <form ref={form} onSubmit={sendEmail} className="flex flex-col  border-4 border-black w-[32rem]  xl:h-[39rem] xl:mt-36 2xl:mt-52 ml-11">

                    <Image src={circles} className="object-contain self-start mt-2 ml-6" />
                    
                    <div className="line bg-black 2xl:w-[31.5rem] h-1 mt-2">  </div>
                    
                    <h1 className="font-NewSpirit text-[#212121] text-6xl ml-16 mt-20"> Say Hi! </h1>
                    
                    <div className="form ml-16 mt-14 flex-col flex gap-12">

                        <input name="user_name" placeholder="Name" className=" bg-inherit border-b-2 border-[#212121] w-[22rem] p-1 text-lg focus:outline-none"   />
                        <input name="user_email" placeholder="Email" className=" bg-inherit border-b-2 border-[#212121] w-[22rem] p-1 text-lg focus:outline-none"   />
                        <input name="message" placeholder="Message" className=" bg-inherit border-b-2 border-[#212121] w-[22rem] p-1 text-lg focus:outline-none"   />

                    </div>

                    <button type="submit" value="Send"  className=" hover:scale-110 transition-all border-4 border-black w-56 self-center mt-14 p-4 font-SegoeUI font-semibold text-2xl text-center"> Submit </button>

                </form>

                <Image src={cursor} className="object-contain xl:ml-5 2xl:ml-10 mt-80" />


            </div>
        </div>
    )
}