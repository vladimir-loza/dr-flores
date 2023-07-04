import { services } from "../../data/services"
import { ServiceCard } from "../parts"



export const Services = () => {
  return (
    <section id="services" className="p-10 scroll-my-40">
      <h3 className="text-emerald-400 text-5xl text-center mb-10">Te ayudo con...</h3>
      <div className="container mx-auto flex flex-row flex-wrap justify-evenly">
        {
          services.map(service => (
            <ServiceCard {...service} key={service.title}/>
          ))
        }
      </div>
    </section>
  )
}
