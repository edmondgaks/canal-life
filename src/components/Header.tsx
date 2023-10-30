import { ShoppingCart, Search } from "lucide-react"
import {  HeartIcon, LogoIcon } from "./icons"

const Header = () => {
  return (
    <div className="flex bg-[#EEE] py-8 h-[12vh] justify-around w-full flex-row items-center">
        <LogoIcon />
        <div className="flex justify-between  gap-10 flex-row items-center">
            <h1>CANNABIs</h1>
            <h1>MUSHROOMS</h1>
            <div className="bg-white flex flex-row w-[300px] justify-between items-center  p-1 shadow-md rounded-md">
                <input type="text" placeholder="What do you want" className="placeholder:text-[#EEE] w-full"  />
                <Search size={20} color="#F47820" />
            </div>
        </div>
        <div className="flex flex-row items-center gap-6">
            <div className="flex flex-row items-center gap-2">
                <img src="/prof.png" width={30} height={30} alt="profile image" />
                <p className="text-[#F47820] text-sm font-medium">Account</p>
            </div>
            <HeartIcon />
            <div className="p-[3px] flex justify-center items-center flex-col bg-[#F47820]  rounded-lg">
                <ShoppingCart color="#fff" />
            </div>
        </div>
    </div>
  )
}

export default Header