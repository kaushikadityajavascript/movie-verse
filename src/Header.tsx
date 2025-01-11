import { Link } from "react-router";

const Header = () => { 
    return (
        <div className="flex justify-between bg-blue-950" >
            <div className="logo-container">
                <img className="w-45 h-25" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjXPchMo7JtSqDyAFDH-Hcjc-jwjBSfD5iDTuTUG4URi35iIwqG-rUJT0&usqp=CAU"}/>
            </div>
            <div className="item-center text-white">
                <ul className="flex gap-4">
                     <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About Us</li></Link>
                </ul>
            </div>
        </div>
    );
} 
export default Header;