import { ContactForm, ContactGrid } from "../parts"

export const Contact = () => {
  return (
    <section id="contact" className="p-10 scroll-my-40">
      <h4 className="text-5xl text-center py-5 mb-5 text-emerald-400">¿Necesita una consulta?</h4>
      <div className="w-full flex flex-col lg:flex-row flex-wrap justify-center mx-auto">
        <ContactGrid />
        <ContactForm />
      </div>
    </section>
  )
}
