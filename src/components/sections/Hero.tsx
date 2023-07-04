
export const Hero = () => {

  const updateProfilePic = () => {

  }

  return (
    <section id="hero" className="flex flex-col md:flex-row justify-evenly items-center w-2/4 mx-auto h-screen">
      <div className="w-4/5 mx-4 flex flex-col justify-center ">
        <h2 className="w-full text-6xl my-5 text-[#1F63ED]">Dr. José Flores Mendez</h2>
        <h3 className="w-full text-3xl text-emerald-400 font-bold">Otorrino Neurólogo</h3>
      </div>
      <div className="w-1/5 hidden sm:block">
        <img 
          src="dr-placeholder.png"
          alt="User image" 
          className="rounded"
          style={{
            width: '500px',
            height: 'auto',
          }}
        />
      </div>
    </section>
  )
}
