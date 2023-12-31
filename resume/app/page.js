import Navbar from "./components/navbar"
import Image from "next/image"
import lefthand from "../public/rolefthand.png"
import righthand from "../public/rohandright.png"
import head from "../public/rohead.png"
import be from "../public/Be.png"
import g from "../public/g.png"
import cursor from "../public/cursor.png"
import Link from "next/link"


export default function Home() {
  return (
    <div className='min-h-screen w-screen bg-[#F0EDE8]'>
      
      <Navbar/>

    <Image src={head} className="absolute w-80 z-0 lg:ml-36 mt-1 " />
    <Image src={righthand} className="hidden md:flex  absolute z-0 lg:ml-[25.4rem] mt-64" />
    <Image src={lefthand} className="hidden md:flex absolute z-20 lg:ml-7 mt-96" />
      <div className=" flex  flex-col lg:flex-row relative  ">
    <div className="flex-col relative ReachOut 2xl:-mt-4 "> 


    <div className="  flex flex-col box border-4 border-black w-96 lg:ml-36 mt-96 lg:h-auto py-2  bg-[#F0EDE8]">

    <h1 className=" font-NewSpirit text-4xl py-6 px-11"> Reach Out </h1>

    <h2 className=" text-base font-normal w-72 ml-11 font-SegoeUI "> All my socials are listed below, you can take a look at my work or just the fun stuff. Get to know me! </h2>

    <div className="icons relative flex items-center self-center gap-4 mt-2">

    <Link target="_blank" className="z-30" href="https://www.instagram.com/aad1hyajpg/">
    <svg className="cursor-pointer z-30" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" >
  <g clip-path="url(#clip0_5_203)">
    <path d="M16 2.88125C20.275 2.88125 20.7813 2.9 22.4625 2.975C24.025 3.04375 24.8688 3.30625 25.4313 3.525C26.175 3.8125 26.7125 4.1625 27.2688 4.71875C27.8313 5.28125 28.175 5.8125 28.4625 6.55625C28.6813 7.11875 28.9438 7.96875 29.0125 9.525C29.0875 11.2125 29.1063 11.7188 29.1063 15.9875C29.1063 20.2625 29.0875 20.7688 29.0125 22.45C28.9438 24.0125 28.6813 24.8563 28.4625 25.4188C28.175 26.1625 27.825 26.7 27.2688 27.2563C26.7063 27.8188 26.175 28.1625 25.4313 28.45C24.8688 28.6688 24.0188 28.9313 22.4625 29C20.775 29.075 20.2688 29.0938 16 29.0938C11.725 29.0938 11.2188 29.075 9.5375 29C7.975 28.9313 7.13125 28.6688 6.56875 28.45C5.825 28.1625 5.2875 27.8125 4.73125 27.2563C4.16875 26.6938 3.825 26.1625 3.5375 25.4188C3.31875 24.8563 3.05625 24.0063 2.9875 22.45C2.9125 20.7625 2.89375 20.2563 2.89375 15.9875C2.89375 11.7125 2.9125 11.2063 2.9875 9.525C3.05625 7.9625 3.31875 7.11875 3.5375 6.55625C3.825 5.8125 4.175 5.275 4.73125 4.71875C5.29375 4.15625 5.825 3.8125 6.56875 3.525C7.13125 3.30625 7.98125 3.04375 9.5375 2.975C11.2188 2.9 11.725 2.88125 16 2.88125ZM16 0C11.6563 0 11.1125 0.01875 9.40625 0.09375C7.70625 0.16875 6.5375 0.44375 5.525 0.8375C4.46875 1.25 3.575 1.79375 2.6875 2.6875C1.79375 3.575 1.25 4.46875 0.8375 5.51875C0.44375 6.5375 0.16875 7.7 0.09375 9.4C0.01875 11.1125 0 11.6562 0 16C0 20.3438 0.01875 20.8875 0.09375 22.5938C0.16875 24.2938 0.44375 25.4625 0.8375 26.475C1.25 27.5313 1.79375 28.425 2.6875 29.3125C3.575 30.2 4.46875 30.75 5.51875 31.1562C6.5375 31.55 7.7 31.825 9.4 31.9C11.1063 31.975 11.65 31.9937 15.9938 31.9937C20.3375 31.9937 20.8813 31.975 22.5875 31.9C24.2875 31.825 25.4563 31.55 26.4688 31.1562C27.5188 30.75 28.4125 30.2 29.3 29.3125C30.1875 28.425 30.7375 27.5313 31.1438 26.4813C31.5375 25.4625 31.8125 24.3 31.8875 22.6C31.9625 20.8938 31.9813 20.35 31.9813 16.0063C31.9813 11.6625 31.9625 11.1188 31.8875 9.4125C31.8125 7.7125 31.5375 6.54375 31.1438 5.53125C30.75 4.46875 30.2063 3.575 29.3125 2.6875C28.425 1.8 27.5313 1.25 26.4813 0.84375C25.4625 0.45 24.3 0.175 22.6 0.1C20.8875 0.01875 20.3438 0 16 0Z" fill="#000100"/>
    <path d="M16 7.78125C11.4625 7.78125 7.78125 11.4625 7.78125 16C7.78125 20.5375 11.4625 24.2188 16 24.2188C20.5375 24.2188 24.2188 20.5375 24.2188 16C24.2188 11.4625 20.5375 7.78125 16 7.78125ZM16 21.3312C13.0563 21.3312 10.6687 18.9438 10.6687 16C10.6687 13.0563 13.0563 10.6687 16 10.6687C18.9438 10.6687 21.3312 13.0563 21.3312 16C21.3312 18.9438 18.9438 21.3312 16 21.3312Z" fill="#000100"/>
    <path d="M26.4625 7.45626C26.4625 8.51876 25.6 9.37501 24.5438 9.37501C23.4813 9.37501 22.625 8.51251 22.625 7.45626C22.625 6.39376 23.4875 5.53751 24.5438 5.53751C25.6 5.53751 26.4625 6.40001 26.4625 7.45626Z" fill="#000100"/>
  </g>
  <defs>
    <clipPath id="clip0_5_203">
      <rect width="32" height="32" fill="white"/>
    </clipPath>
  </defs>
</svg>
    </Link>

<Link target="_blank" className="z-30" href="https://www.linkedin.com/in/aadhya-dhar-7a5690251/">
<svg className="cursor-pointer   z-30"  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <g clip-path="url(#clip0_5_207)">
    <path d="M29.6378 0H2.36222C1.73572 0 1.13488 0.248877 0.691879 0.691879C0.248877 1.13488 0 1.73572 0 2.36222V29.6378C0 30.2643 0.248877 30.8651 0.691879 31.3081C1.13488 31.7511 1.73572 32 2.36222 32H29.6378C30.2643 32 30.8651 31.7511 31.3081 31.3081C31.7511 30.8651 32 30.2643 32 29.6378V2.36222C32 1.73572 31.7511 1.13488 31.3081 0.691879C30.8651 0.248877 30.2643 0 29.6378 0ZM9.53778 27.26H4.72667V11.9778H9.53778V27.26ZM7.12889 9.86C6.58315 9.85693 6.05055 9.69226 5.59831 9.38678C5.14607 9.08131 4.79445 8.64871 4.58784 8.14359C4.38122 7.63846 4.32886 7.08346 4.43738 6.54861C4.54589 6.01376 4.8104 5.52304 5.19754 5.13838C5.58468 4.75372 6.07709 4.49236 6.61262 4.38728C7.14816 4.28221 7.70282 4.33812 8.2066 4.54798C8.71039 4.75784 9.14072 5.11222 9.44329 5.56642C9.74585 6.02061 9.9071 6.55426 9.90667 7.1C9.91182 7.46538 9.84335 7.82805 9.70535 8.16641C9.56735 8.50476 9.36264 8.81187 9.10343 9.06942C8.84421 9.32698 8.5358 9.52971 8.19657 9.66553C7.85733 9.80136 7.49423 9.86749 7.12889 9.86ZM27.2711 27.2733H22.4622V18.9244C22.4622 16.4622 21.4156 15.7022 20.0644 15.7022C18.6378 15.7022 17.2378 16.7778 17.2378 18.9867V27.2733H12.4267V11.9889H17.0533V14.1067H17.1156C17.58 13.1667 19.2067 11.56 21.6889 11.56C24.3733 11.56 27.2733 13.1533 27.2733 17.82L27.2711 27.2733Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_5_207">
      <rect width="32" height="32" fill="white"/>
    </clipPath>
  </defs>
</svg>
</Link>

<Link target="_blank" className="z-30" href="https://www.behance.net/aadhyadhar">
<Image className="cursor-pointer  z-30" src={be} />
</Link>

<Link target="_blank" className="z-30" href="https://open.spotify.com/user/82rrhbvoae0x4weotym48181b?si=97367d4fe6bf424c">
<svg className="cursor-pointer z-30" xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
  <path d="M18.4434 0C8.25761 0 0 8.25739 0 18.4432C0 28.6294 8.25761 36.8861 18.4434 36.8861C28.6303 36.8861 36.887 28.6294 36.887 18.4432C36.887 8.25805 28.6303 0.000880948 18.4432 0.000880948L18.4434 0ZM26.9014 26.6004C26.5711 27.1421 25.8619 27.3139 25.3201 26.9814C20.9898 24.3363 15.5385 23.7373 9.11852 25.2041C8.49987 25.345 7.8832 24.9574 7.74225 24.3385C7.60064 23.7196 7.98671 23.103 8.6069 22.962C15.6325 21.3563 21.6589 22.048 26.5204 25.019C27.0622 25.3516 27.234 26.0586 26.9014 26.6004ZM29.1589 21.5778C28.7426 22.2551 27.8573 22.4687 27.1811 22.0524C22.2236 19.0046 14.6665 18.1221 8.8027 19.902C8.04221 20.1317 7.23901 19.7032 7.0082 18.944C6.77915 18.1835 7.20795 17.3819 7.96711 17.1506C14.6652 15.1182 22.9922 16.1027 28.6853 19.6012C29.3615 20.0174 29.5751 20.9026 29.1589 21.5778ZM29.3527 16.3485C23.4084 12.8179 13.6012 12.4932 7.92593 14.2157C7.01458 14.4921 6.05082 13.9776 5.77464 13.0663C5.49846 12.1545 6.0125 11.1914 6.92451 10.9143C13.4394 8.9366 24.2696 9.31871 31.1133 13.3814C31.9347 13.868 32.2034 14.9266 31.7167 15.7453C31.2322 16.565 30.1706 16.8352 29.3535 16.3485H29.3527Z" fill="black"/>
</svg>
</Link>

<Link className="z-30" href="https://www.goodreads.com/user/show/155726028-aadhya-dhar" target="_blank">
<Image className="cursor-pointer  z-30" src={g} />
</Link>

<Link className="z-30" href="https://pinterest.com/aadhyadhar/" target="_blank">
<svg className="cursor-pointer z-30" xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
  <g clip-path="url(#clip0_5_216)">
    <path d="M18.5 37C28.7173 37 37 28.7173 37 18.5C37 8.28273 28.7173 0 18.5 0C8.28273 0 0 8.28273 0 18.5C0 28.7173 8.28273 37 18.5 37Z" fill="#F0EDE8"/>
    <path d="M18.5 0C8.28313 0 0 8.28313 0 18.5C0 26.3416 4.87243 33.0412 11.7547 35.7362C11.5872 34.2745 11.4502 32.021 11.8156 30.4222C12.1506 28.9757 13.9778 21.2255 13.9778 21.2255C13.9778 21.2255 13.4296 20.114 13.4296 18.4848C13.4296 15.9115 14.9218 13.993 16.7794 13.993C18.363 13.993 19.1243 15.1807 19.1243 16.5967C19.1243 18.1802 18.1193 20.5556 17.5864 22.7634C17.1449 24.6058 18.5152 26.1132 20.3272 26.1132C23.6161 26.1132 26.1436 22.6416 26.1436 17.6473C26.1436 13.2165 22.9613 10.1255 18.4086 10.1255C13.1403 10.1255 10.0494 14.0691 10.0494 18.1498C10.0494 19.7333 10.6584 21.4387 11.4198 22.3675C11.572 22.5502 11.5872 22.7177 11.5416 22.9004C11.4045 23.479 11.0848 24.7428 11.0239 25.0016C10.9477 25.3366 10.7498 25.4128 10.3996 25.2453C8.08519 24.1642 6.63868 20.7992 6.63868 18.0737C6.63868 12.242 10.8716 6.88231 18.8654 6.88231C25.2757 6.88231 30.27 11.4502 30.27 17.5712C30.27 23.951 26.2502 29.0823 20.6774 29.0823C18.8045 29.0823 17.0383 28.1078 16.4444 26.9506C16.4444 26.9506 15.5156 30.4831 15.2872 31.351C14.8761 32.965 13.7494 34.9749 12.9881 36.2082C14.7239 36.7412 16.551 37.0305 18.4695 37.0305C28.6864 37.0305 36.9696 28.7473 36.9696 18.5305C37 8.28313 28.7169 0 18.5 0Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_5_216">
      <rect width="37" height="37" fill="white"/>
    </clipPath>
  </defs>
</svg>
</Link>


    </div>
    <div className="Awards flex flex-col ">

    <h1 className=" font-NewSpirit text-4xl py-6 px-11"> Awards </h1>

    <h2 className=" text-base font-normal w-72 ml-11 -mt-5 font-SegoeUI"> Here are some of my awards from over the years.    </h2>
    <h2 className=" text-base font-normal w-80 ml-11 font-SegoeUI"> <br/> Winner, Toycathon Challenge ‘21 <br/> <br/>
Gold Medal and Scholar Badge for 7 years of consecutive academic merit <br/>

<br/> Global Honorable Mention, NASA Space Apps ‘22 <br/>

<br/>Conrad Innovator, Conrad Challenge ‘22   </h2>
    </div>
    </div>

    </div>


    <div className="flex-col Intro mt-56 xl:ml-14 2xl:ml-52 px-5 lg:px-0 ">

    <h1 className="font-NewSpirit text-7xl text-[#212121]">
    Hello, I am Aadhya!
    </h1>

    <h2 className="text-[#373737] text-2xl xl:w-[35rem] 2xl:w-[38rem] mt-7 font-SegoeUI "> I like visual design, art, reading, writing, researching and making things. 
    </h2>

    <h2 className="text-[#373737] text-2xl xl:w-[35rem] 2xl:w-[38rem] mt-7 font-SegoeUI "> I’ve been painting all my life and have been graphic designing for over 5 years. Currently, I’m involved with my community project, <a target="_blank" className="text-[#D86F5B] font-SegoeUI" href="https://www.instagram.com/wularco/">Wular Collective </a> and overlooking web and social media design for <a target="_blank" className="text-[#D86F5B] font-SegoeUI" href="https://newdelhi.nss.org/">New Delhi Space Society.</a> I was previously a department head at <a target="_blank" className="text-[#D86F5B] font-SegoeUI" href="https://exunclan.com/"> Exun Clan </a> and a core organizer at <a target="_blank" className="text-[#D86F5B] font-SegoeUI" href="https://www.codeday.org/">CodeDay Delhi.</a> 
    </h2>

    <Image className=" hidden lg:flex ml-[30rem] xl:ml-[37rem] 2xl:ml-[40rem] -mt-14" src={cursor} />

    <h2 className="text-[#373737] text-2xl xl:w-[35rem] 2xl:w-[38rem] mt-7 font-SegoeUI "> I love working with people; I commission art and work freelance as well. Check out my <a target="_blank" className="text-[#D86F5B] font-SegoeUI" href="https://www.behance.net/aadhyadhar">portfolio</a> for more. If you’d like to collaborate on a project, or just say hi, <a target="_blank" className="text-[#D86F5B] font-SegoeUI" href="/Contact">contact me.</a> Here is my <a target="_blank" className="text-[#D86F5B] font-SegoeUI" rel="noopener noreferrer" href="/resume.pdf">résumé.</a> 
    <br/>  Find all my links here.
    </h2>
    
    <svg className="xl:mt-4 xl:-ml-24 z-0  2xl:-ml-48 arrow absolute" xmlns="http://www.w3.org/2000/svg" width="180" height="60" viewBox="0 0 180 60" fill="none">
  <path d="M5.41596 26.9379C5.35291 28.0496 5.25733 28.8891 5.16828 29.7831C5.02851 31.3457 4.81791 32.8615 4.60729 34.3774C4.53708 34.8826 4.33167 35.3488 4.11974 35.7606C3.90781 36.1724 3.48331 36.4439 2.95546 36.3966C2.36323 36.3569 1.93809 36.0764 1.81522 35.5942C1.70535 35.2208 1.65984 34.8398 1.62083 34.5132C1.59027 30.4313 1.888 26.3654 2.84229 22.3315C2.92551 21.9351 3.07307 21.531 3.28498 21.1193C3.66398 20.4667 4.23019 20.2886 5.04148 20.523C5.51148 20.6325 5.91714 20.7497 6.44501 20.7971C9.47696 21.0423 12.5024 21.233 15.5344 21.4783C15.927 21.4866 16.3327 21.6038 16.674 21.7286C17.2148 21.8849 17.5178 22.2352 17.5763 22.7251C17.5704 23.2227 17.2941 23.6421 16.7279 23.8202C16.2261 23.9905 15.589 24.1218 15.0676 24.1289C13.1109 24.1417 11.0768 24.0534 9.11357 24.0118C8.78529 23.9958 8.46351 24.0342 7.94214 24.0413C8.38679 24.4851 8.61887 24.7886 8.91531 25.0845C16.7643 32.8702 26.4388 38.4505 37.8873 41.9417C47.2562 44.9635 57.0418 46.5553 67.077 46.9579C76.063 47.3202 85.0483 47.1304 94.0454 45.9455C106.968 44.2917 119.542 41.3546 131.502 36.5584C142.902 31.9947 153.014 25.9287 161.526 17.9555C166.342 13.4605 170.192 8.52872 173.063 3.05135C173.217 2.70169 173.435 2.34435 173.724 2.03375C174.303 1.41255 175.365 1.56174 175.585 2.30844C175.701 2.73622 175.76 3.22612 175.612 3.63022C175.279 4.66382 174.945 5.69743 174.406 6.64523C172.248 10.9884 169.124 14.8949 165.511 18.5286C158.234 25.9125 149.461 31.7083 139.779 36.4532C132.69 39.9499 125.291 42.4899 117.641 44.563C109.108 46.9071 100.492 48.5435 91.6616 49.4876C85.4124 50.1787 79.1691 50.3722 72.8997 50.348C65.1242 50.2829 57.4832 49.7048 49.8799 48.3492C40.7379 46.6805 31.9489 44.1415 23.8983 40.1341C17.3033 36.8362 11.4604 32.7308 6.36962 27.8177C6.15055 27.6231 5.86062 27.3816 5.41596 26.9379Z" fill="black"/>
</svg>

    </div>
      </div>
    </div>
  )
}
