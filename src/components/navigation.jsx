import styled from "styled-components";

// style the navigation
const NavContainer = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 10px;
`;

// style the nav title
const NavTitle = styled.h2`
    margin: 0 0 15px 0;
    font-size: 18px;
    font-weight: 600;
    color: #555555;
`;

// style the nav links
const NavLink = styled.a`
    display: block;
    padding: 10px 5px;
    text-decoration: none;
    color: #777777;
    font-size: 16px;
    transition: 0.2s;

    &:first-of-type {
        color: #38a3db;
        font-weight: 600;
    }

    &:hover {
        color: #38a3db;
    }
`;

// nav component getting the menu text through the props
const Navigation = (props) => {
    return (
        <NavContainer>
            {/* nav title */}
            <NavTitle>{props.title}</NavTitle>

            {/* nav links using the text props*/}
            <NavLink href="#newsfeed">{props.newsfeed}</NavLink>
            <NavLink href="#messages">{props.messages}</NavLink>
            <NavLink href="#watch">{props.watch}</NavLink>
        </NavContainer>
    );
};

export default Navigation;