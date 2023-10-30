import Image from "next/image"
import navimg from "../../public/navbarimg.png"
 
export default function Navbar(){
    return(
        <div className=" h-20 w-screen absolute z-30 top-0 flex justify-between items-center mt-4 px-4 lg:px-24">
            <div className=" flex items-center gap-2">
            <h1 className="font-NewSpirit lg:text-4xl text-xl">Aadhya Dhar</h1>
            <Image src={navimg} />
            </div>
            <div className=" hidden  md:flex items-center gap-16 text-2xl font-semibold">
                <a href="/" className="hover:text-[#D86F5B] transition-all "> Home </a>
                <a href="/Work" className="hover:text-[#D86F5B] transition-all "> Work </a>
                <a href="/Contact" className="hover:text-[#D86F5B] transition-all "> Contact </a>
            </div>

        </div>
    )
}