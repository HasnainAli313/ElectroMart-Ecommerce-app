
function ContactUs() {
  return (
    <>
    <section className="">
    <div>
      <h1 className="text-4xl font-semibold">Contact Us</h1>
        <p>Fill in the form to get in touch.</p>
    </div>
    <form action="" className="flex gap-1 flex-col ">
        <div className="flex gap-1 ">
        <div className="flex flex-col gap-1">
        <label htmlFor="">First Name</label>
        <input className="border border-black" type="text"  />
        </div>
        <div className="flex flex-col gap-1">
        <label htmlFor="">last Name</label>
        <input className="border border-black"type="text"  />
        </div>
        </div>
        
        <label htmlFor="">Email</label>
        <input className="border border-black" type="text"  />
        <label htmlFor="">Message</label>
        <textarea className="border border-black h-[50px]" name=""  id="">Write your message here</textarea>
    </form>
    </section>
    </>
  )
}

export default ContactUs