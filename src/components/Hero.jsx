import banner from "../assets/hero.jpg"

function Hero() {
  return (
    //Banner
    <section>
        <div className='h-[100vh]'>
            <img className="h-[50vh] w-[100vw] " src={banner} alt="" />
            <h1 className=" text-5xl bg-gray-400 relative top-3">adasd</h1>
        </div>
    </section>
  )
}

export default Hero