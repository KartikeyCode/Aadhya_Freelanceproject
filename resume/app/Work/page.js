import Image from "next/image"
import Navbar from "../components/navbar"
import arrow from "../../public/workarrow.png"
import cursor from "../../public/whatidocursor.png"
import collage1 from "../../public/workcollage/1.png"
import collage2 from "../../public/workcollage/2.png"
import collage3 from "../../public/workcollage/3.png"
import collage4 from "../../public/workcollage/4.png"
import collage5 from "../../public/workcollage/5.png"
import collage6 from "../../public/workcollage/6.png"
import collage7 from "../../public/workcollage/7.png"
import collage8 from "../../public/workcollage/8.png"



export default function Work(){
    return(
        <div className="min-h-screen 2xl:max-h-screen 2xl:overflow-hidden w-screen  bg-[#F0EDE8]">
            <Navbar/>
            <div className="flex maincontainer px-6 pt-28 lg:px-24 ">

            <div className="whatIdo flex flex-col lg:pt-16">

            <h1 className="font-NewSpirit text-7xl text-[#212121]"> What I do. </h1>

        <div className="flex">

            <h2 className="lg:w-[38.5rem] font-SegoeUI  xl:text-xl text-2xl mt-3 lg:mb-0 mb-6">

            I am proficient in using creative cloud, open source and other design softwares. I usually work with Photoshop, Illustrator, Figma and Gimp. I’m also adept at using Sketch and Affinity Designer. For digital art, I use Procreate. You can find most of my work on <a target="_blank" className="text-[#D86F5B] font-SegoeUI" href="https://www.behance.net/aadhyadhar">Behance.</a> 

           <br/><br/>   I write as well. I’ve written open articles and formatted content for quite some time. Most of my work experience is through freelance work and internships. Some of my past internships were with the Regional Delegation of Bangladesh, Bhutan and Maldives at <a target="_blank" className="text-[#D86F5B] font-SegoeUI" href="https://www.icrc.org/en">ICRC</a>, <a target="_blank" className="text-[#D86F5B] font-SegoeUI" href="https://www.indastro.com/">Indastro</a> and <a target="_blank" className="text-[#D86F5B] font-SegoeUI" href="https://www.memomoti.com/">Memomoti.</a> I am open to work most times, contact me to know more!

           <br/><br/> Again, you can access my <a target="_blank" className="text-[#D86F5B] font-SegoeUI"  rel="noopener noreferrer" href="/resume.pdf">résumé</a> here. You can find my art on my <a target="_blank" className="text-[#D86F5B] font-SegoeUI" href="https://www.instagram.com/aad1hyajpg/">Instagram account.</a>


            </h2>

            <Image src={arrow}  className="hidden lg:flex self-center lg:-mt-28 lg:ml-5"/>
        </div>

        <Image src={cursor} className="hidden lg:flex mt-8 ml-36" />

            </div>

        <div className="collage hidden 2xl:-mt-7 xl:mt-[0.68rem]  lg:flex ">

            <div className="1 flex-col mt-1">
                <Image src={collage1} className="w-72 " />
                <Image src={collage2} className="w-72 mt-9" />
                <Image src={collage3} className="w-72 mt-9" />
                <Image src={collage4} className="w-72 mt-9" />

            </div>

            <div className="2 flex-col mt-4 ml-10">

                <Image src={collage5} className="w-72" />
                <Image src={collage6} className="w-72 mt-9" />
                <Image src={collage7} className="w-72 mt-9" />
                <Image src={collage8} className="w-72 mt-9" />


            </div>  


        </div>

            </div>
        </div>
    )
}