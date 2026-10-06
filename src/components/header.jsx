// importing the icons for the header
import { FaSearch, FaUserCircle, FaCog } from "react-icons/fa";

// receiving the dynamic content through props
const Header = (props) => {
    return (
        <header>
            {/* the logo thats passing through the props*/}
            <h1>{props.logo}</h1>

            {/* search area*/}
            <div>
                <FaSearch />
                <input
                    type="text"
                    placeholder={props.searchText}
                />
            </div>

            {/* user and settings icons*/}
            <div>
                <FaUserCircle />
                <FaCog />
            </div>
        </header>

    );
};

export default Header;