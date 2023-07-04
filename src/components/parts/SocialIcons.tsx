import { IconType } from "react-icons"

interface IconItem {
  Icon: IconType,
  link: string
}

interface Props {
  title?: string,
  MainIcon: IconType
  Icons: IconItem[],
}

export const SocialIcons = ({title, Icons, MainIcon}: Props) => {
  return (
    <div className='w-80 flex flex-row justify-evenly px-5 mx-5 my-10'>
      <div className="icon-container flex items-center justify-center">
        <MainIcon className='bg-cyan-100 text-cyan-700 p-2 rounded' size="3rem"/>
      </div>
      <div className="contact-container w-80 ml-3 ">
        <h4 className='text-[#1F63ED] font-bold'>{title}</h4>
        <div className="flex flex-row m-0 p-0">
        {
          Icons.map(({Icon, link}) => (
            <a href={link} target="_black">
              <Icon className='inline-block' size="2rem"/>
            </a>
          ))
        }
        </div>
      </div>
    </div>
  )
}
