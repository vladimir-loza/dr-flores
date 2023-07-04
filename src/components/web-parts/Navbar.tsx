import React from 'react'

const menuItems = [
  {
    label: "Sobre mi",
    link: "aboutme"
  },
  {
    label: "Estudios",
    link: "services"
  },
  {
    label: "Tratamientos",
    link: "therapies"
  },
  {
    label: "Contacto",
    link: "contact"
  },
  {
    label: "Correo",
    link: "contactform"
  },
]

export const Navbar = () => {
  return (
    <ul className="m-3 w-2/6 flex flex-col md:flex-row text-white justify-evenly " >
      {
        menuItems.map(({label, link}) => (
          <li
            className="transition text-[#1F63ED] hover:text-emerald-400 cursor-pointer rounded p-1 hover:backdrop-blur-md hover:ease-out"
            key={link}
          >
          <a
            href={`#${link}`}
            key={link} 
          >
          {label}
          </a>
          </li>
        ))
      }
    </ul>
  )
}
