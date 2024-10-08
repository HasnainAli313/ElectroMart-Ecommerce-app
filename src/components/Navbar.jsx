
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
    <nav className='flex p-3 justify-between bg-gray-500 '>  
        <h1 className='text-2xl'>Sasta Bazzar</h1>
        <ul className='flex  text-2xl gap-3 pr-3'>
            <li className='hover:text-white'>
                <Link href=""/>Home<Link/>
            </li>
            <li className='hover:text-white'>
            <Link href=""/>About<Link/>
            </li>
            <li className='hover:text-white'>
            <Link href=""/>Services<Link/>
            </li>
        </ul>
     </nav>
    </>
  )
}

export default Navbar