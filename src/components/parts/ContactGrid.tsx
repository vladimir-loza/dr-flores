import { contactItems } from "../../data/contacts"
import { ContactItem } from "./ContactItem"
import { SocialIcons } from "./SocialIcons"

import {TfiWorld} from 'react-icons/tfi'
import {AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'


export const ContactGrid = () => {
  return (
    <div className="w-1/4 border-r-2 border-indigo-500">
      {
        contactItems.map(contact => (
          <ContactItem {...contact}/>
        ))
      }
      <SocialIcons
        title="Redes sociales"
        Icons={[
          {
            link: "",
            Icon: AiFillFacebook
          },
          {
            link: "",
            Icon: AiFillInstagram,
          },{
            link: "",
            Icon: AiFillTwitterCircle,
          },
          {
            link: "",
            Icon: AiFillLinkedin,
          },
        ]}
        MainIcon={TfiWorld}
      />
    </div>
  )
}
