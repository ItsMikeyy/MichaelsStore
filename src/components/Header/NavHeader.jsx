import NavLink from "react-router-dom/NavLink"

const NavHeader = () => {
    return (
       <div className="text-red-600 inline-flex text-xl flex-row justify-between w-screen px-20 border-b-2 border-gray-300">
           <NavLink activeClassName="text-red-800 text-2xl" className="hover:bg-red-500 hover:text-white hover:text-2xl hover:px-8" to="/about">Home</NavLink>
           <NavLink activeClassName="text-red-800 text-2xl" className="hover:bg-red-500 hover:text-white hover:text-2xl hover:px-8" to="/shop">Shop</NavLink>
           <NavLink activeClassName="text-red-800 text-2xl" className="hover:bg-red-500 hover:text-white hover:text-2xl hover:px-8" to="/deals">Deals</NavLink>
           <NavLink activeClassName="text-red-800 text-2xl" className="hover:bg-red-500 hover:text-white hover:text-2xl hover:px-8" to="/contact">Contact Us</NavLink>
       </div>
    )
}

export default NavHeader;