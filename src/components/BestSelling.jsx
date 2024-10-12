import BestItems from "./BestItems";
import core from "../assets/1.jpg"
import amd from "../assets/2.jpeg"
import asus from "../assets/3.jpeg"
import corsair from "../assets/4.jpeg"

export default function BestSelling() {
  return (
    <>
        <section className="bg-[#FFFFF] p-5 text-center">
          <h1 className="text-3xl">Best Selling Products</h1>
          {/* items div */}
          <div className="flex gap-10 justify-around flex-wrap p-5">
            <BestItems Title="Intel i7 CPU" Rating="Rating: 4.8/5"  Price="Price: $320" src={core}/>
            <BestItems Title="AMD Ryzen 5" Rating="Rating: 4.6/5"  Price="Price: $250" src={amd}/>
            <BestItems Title="ASUS Combo" Rating="Rating: 4.7/5"  Price="Price: $440" src={asus}/>
            <BestItems Title="Corsair RAM" Rating="Rating: 4.9/5"  Price="Price: $150" src={corsair}/>
          </div>
        </section>  
    </>
  )
}
