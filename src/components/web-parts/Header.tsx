import { Navbar } from "./Navbar"

export const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around md:sticky top-0 px-2 text-lg bg-[#F1F7FF] shadow-lg">
      <a href="#hero">
        <div className="w-64 m-3 text-[#1F63ED] flex flex-row items-center">
          <img src="logo-dr.jpg" className="rounded-full w-10 h-10 mr-3" alt=""/>
          <p>
            Dr. José Flores Mendez
          </p>
        </div>
      </a>
      
      <Navbar />      
    </div>
  )
}
