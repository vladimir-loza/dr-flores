
export const ContactForm = () => {
  return (
    <section id="contactform" className="bg-white scroll-my-40 mb-20">
       <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-center text-[#1F63ED]">Estemos en contacto</h2>
      <p className="mb-7 lg:mb-16 font-light text-center sm:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime aut consequuntur architecto possimus voluptates neque nostrum totam voluptatem sunt?.</p>
      <form action="#" className="space-y-5">
          <div>
            <label htmlFor="email" className="block mb-2 text-md font-medium">Correo electrónico:</label>
            <input type="email" id="email" className="border border-gray-300 text-md rounded-lg focus:outline-none focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com"/>
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-md font-medium">Asunto:</label>
              <input type="text" id="subject" className="border border-gray-300 text-md rounded-lg focus:outline-none focus:border-blue-500 block w-full p-2.5" placeholder="¿Cuál es el asunto de su mensaje?" required />
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-md font-medium">Mensaje</label>
              <textarea id="message" rows={5} className="resize-none border border-gray-300 text-md rounded-lg focus:outline-none focus:border-blue-500 block w-full p-2.5" placeholder="¿Cuál es su mensaje?"></textarea>
          </div>
          <button type="button" className="border bg-emerald-300 border-emerald-300 text-sm rounded-lg focus:outline-none focus:border-blue-500 block w-48 mx-auto hover:bg-emerald-200 p-2.5">Enviar correo</button>
      </form>
  </div>
    </section>
  )
}
