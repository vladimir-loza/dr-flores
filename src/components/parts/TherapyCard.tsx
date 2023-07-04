import { IconType } from 'react-icons'

interface Props {
  Icon: IconType,
  title: String
}

export const TherapyCard = ({Icon, title}: Props) => {
  return (
    <div className='flex flex-row w-80 px-10 py-5 mx-4 my-2 items-center'>
      <div className="icon-container px-3">
        <Icon className='mx-auto text-[#1F63ED]' size="2rem"/>
      </div>
      <div className="therapy px-2">
        <h3 className='text-emerald-400 font-bold text-xl'>{title}</h3>
      </div>
    </div>
  )
}
