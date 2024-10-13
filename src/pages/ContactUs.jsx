import contactus from "../assets/contact-us-image.jpg"

function ContactUs() {
  return (
    <>
    <section className="p-5 flex lg:flex-nowrap flex-wrap place-items-center  bg-[#FFFFFF]  gap-10">
    <div className="flex gap-2 flex-col">
      <h1 className="text-4xl font-semibold">Contact Us</h1>
        <p className="text-[#9095A0]">Fill in the form to get in touch.</p>
        <img className="w-[700px] h-[500px]" src={contactus} alt="" />
    </div>
    <form action="" className="flex gap-1 w-[100%] flex-col place-items-center ">
        <div className="flex gap-1 flex-wrap lg:flex-nowrap  lg:w-[80%] ">
        <div className="flex flex-col  w-[100%] gap-1">
        <label className="font-semibold" htmlFor="">First Name</label>
        <input className="border p-1 bg-[#F3F4F6] rounded-sm border-black" type="text"  />
        </div>
        <div className="flex flex-col w-[100%] gap-1">
        <label  className="font-semibold" htmlFor="">last Name</label>
        <input className="border p-1 bg-[#F3F4F6] rounded-sm border-black"type="text"  />
        </div>
        </div>
        
        <div className="flex  w-[100%] lg:w-[80%] flex-col">
        <label className="font-semibold" htmlFor="">Email</label>
        <input className="border p-1 bg-[#F3F4F6] rounded-sm border-black" type="text"  />
            
        <label className="font-semibold" htmlFor="">Message</label>
        <textarea className="border pl-1 rounded-sm bg-[#F3F4F6] border-black h-[50px]" name=""  id="" placeholder="write your message here"></textarea>
        <input className="bg-[#636AE8]  text-white mt-2 p-2" type="submit" value="Submit"/>
        </div>
    </form>
    </section>
    </>
  )
}

export default ContactUs