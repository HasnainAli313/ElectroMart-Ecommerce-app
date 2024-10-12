function BestItems(props) {
  return (
    <>
    <div className="border flex gap-10 bg-[#FFFFFF] rounded-md p-2">
        <div>
            <h3>{props.Title}</h3>
            <p className="text-sm text-[#9095A0]">{props.Rating}</p>
            <p className="text-sm text-[#9095A0]">{props.Price}</p>
            <button className="p-1 m-2 rounded-md border hover:bg-[#636AE8] hover:text-white hover:transition-all duration-1000 text-[#636AE8] border-[#636AE8]">Add to Cart</button>
        </div>
        <img className="w-[100px] " src={props.src} alt="" />
    </div>
    </>
  )
}

export default BestItems