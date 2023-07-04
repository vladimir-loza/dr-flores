import { therapies } from "../../data/therapies"
import { TherapyCard } from "../parts"



export const Therapies = () => {
  return (
    <section id="therapies" className="bg-white p-10 scroll-my-40">
      <h2 className="text-[#1F63ED] text-4xl text-center mb-10">Tratamiento de..</h2>
      <div className="container mx-auto flex flex-row flex-wrap justify-evenly">
        {
          therapies.map(theraphy => (
            <TherapyCard {...theraphy} key={theraphy.title}/>
          ))
        }
      </div>
    </section>
  )
}
