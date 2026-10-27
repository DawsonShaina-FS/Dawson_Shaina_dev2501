
// import icons for header
// import icons for header
import { FaSearch, FaUserCircle, FaCog, FaBell } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router";

// import React hook
import { useState } from "react";

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

// style the links for the icons
const ProfileLink = styled(Link)`
    color: #777777;
    display: flex;
    align-items: center;
    text-decoration: none;

    &:hover {
        color: #725ac1;
    }
`;


// style the notification container
const NotificationContainer = styled.div`
    position: relative;
`;

// style the notification button
const NotificationButton = styled.button`
    background: none;
    border: none;
    color: #777777;
    font-size: 23px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

// style the notification dropdown
const NotificationMenu = styled.div`
    position: absolute;
    top: 40px;
    right: 0;
    width: 260px;
    background-color: #ffffff;
    border: 1px solid #eeeeee;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
    z-index: 100;
    color: #333333;
    font-size: 14px;

    p {
        padding: 10px 0;
        margin: 0;
        border-bottom: 1px solid #eeeeee;
    }

    p:last-child {
        border-bottom: none;
    }
`;


// receiving content through props
const Header = (props) => {

    // using the usestate to open and close notifications
    const [showNotifications, setShowNotifications] = useState(false);

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

                {/* show notifications */}
                <NotificationContainer>
                    {/* notification button */}
                    <NotificationButton
                        type="button"
                        aria-label="Toggle notifications"
                        aria-expanded={showNotifications}
                        onClick={() => setShowNotifications(!showNotifications)}
                    >
                        <FaBell />
                    </NotificationButton>

                    {/* show notifications when clicked */}
                    {showNotifications && (
                        <NotificationMenu>
                            <strong>Notifications</strong>
                            <p>You have a new follower!</p>
                            <p>Someone liked your post.</p>
                            <p>Your profile has been updated.</p>
                        </NotificationMenu>
                    )}
                </NotificationContainer>

                <ProfileLink to="/profile" aria-label="Profile settings">
                    <FaUserCircle />
                </ProfileLink>

                <ProfileLink to="/settings" aria-label="Settings">
                    <FaCog />
                </ProfileLink>
            </UserIcons>
        </HeaderContainer>
    );
};

export default Header;
