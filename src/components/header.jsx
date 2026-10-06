// import icons for header
import { FaSearch, FaUserCircle, FaCog } from "react-icons/fa";
import styled from "styled-components";

// style the header
const HeaderContainer = styled.header`
    height: 80px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    padding: 0 50px;
    border-bottom: 1px solid #eeeeee;
`;

// style the logo
const Logo = styled.h1`
    width: 220px;
    margin: 0;
    font-size: 28px;
    font-weight: 500;
    color: #38a3db;
`;

// style the search area
const SearchArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #9a9a9a;
`;

// style the search input
const SearchInput = styled.input`
    width: 300px;
    padding: 10px;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 15px;

    &::placeholder {
        color: #aaaaaa;
    }
`;

// style the user icons
const UserIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    color: #777777;
    font-size: 23px;
`;

// receiving content through props
const Header = (props) => {
    return (
        <HeaderContainer>
            {/* show logo */}
            <Logo>{props.logo}</Logo>

            {/* search area */}
            <SearchArea>
                <FaSearch />
                <SearchInput
                    type="text"
                    placeholder={props.searchText}
                />
            </SearchArea>

            {/* User and settings icons */}
            <UserIcons>
                <FaUserCircle />
                <FaCog />
            </UserIcons>
        </HeaderContainer>
    );
};

export default Header;