import CartWidget from './CartWidget';
const Navbar = () =>{
    return(
        <div className="Navbar">
                <header>
                <div className='navElements'>
                <a href="#" className="logo">Mercane</a>

                <ul className="articleCat">
                    <li>
                        <a href="#">Dices</a>
                    </li>
                    <li>
                        <a href="#">Minis</a>
                    </li>
                    <li>
                        <a href="#">Modules</a>
                    </li>
                    <li>
                        <a href="#">Accesories</a>
                    </li>
                </ul>
                <div>
                    <ul id= 'registerList'>
                        <li>Register</li>
                        <li>Log In</li>
                    </ul>
                </div>
                <div id='cart'>
                <CartWidget/>
                </div>
                </div>
                </header>
        </div>
    )
}
export default Navbar