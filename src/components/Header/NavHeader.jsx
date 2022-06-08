import NavLink from "react-router-dom/NavLink"

const NavHeader = () => {
    return (
       <div className="text-red-600 inline-flex text-xl flex-row justify-between w-screen px-8 border-b-2 border-gray-300">
           <NavLink activeClassName="text-red-800 text-2xl" className="px-1 hover:text-2xl" to="/about">Home</NavLink>
           <NavLink activeClassName="text-red-800 text-2xl" className="px-1 hover:text-2xl" to="/shop">Shop</NavLink>
           <NavLink activeClassName="text-red-800 text-2xl" className="px-1 hover:text-2xl" to="/brands">Brands</NavLink>
           <NavLink activeClassName="text-red-800 text-2xl" className="px-1 hover:text-2xl" to="/contact">Contact Us</NavLink>
       </div>
    );
}

export default NavHeader;