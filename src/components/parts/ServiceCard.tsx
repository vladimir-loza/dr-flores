import { IconType } from "react-icons"
import {FaHeart} from "react-icons/fa"
interface Props {
  Icon: IconType,
  title: string,
  description?: string
}

export const ServiceCard = ({Icon, title, description}: Props )=> {
  return (
    <div className="w-80 rounded shadow-xl bg-white mx-4 my-2 px-10 py-5">
      <Icon className="mx-auto text-emerald-400 " size="2rem" />
      <h3 className="text-center py-3 text-[#1F63ED] font-bold text-xl">{title}</h3>
      <p>{description}</p>
    </div>
  )
}
