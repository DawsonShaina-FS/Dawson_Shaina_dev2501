// for editing and deleting
import { FaEdit, FaTrash } from "react-icons/fa";
import styled from "styled-components";

// style the actual post card
const Card = styled.article`
    background-color: #ffffff;
    padding: 25px;
    margin-top: 25px;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

// style the top part of the post
const PostHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
`;

// style the user image
const Avatar = styled.img`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    object-fit: cover;
`;

// style the post title
const PostTitle = styled.h2`
    margin: 0;
    font-size: 18px;
    color: #444444;
`;

// style the post description
const Description = styled.p`
    margin: 10px 0 20px;
    color: #777777;
    font-size: 15px;
    line-height: 1.6;
`;

// area for the buttons
const ButtonArea = styled.div`
    display: flex;
    gap: 10px;
`;

// style the edit and delete buttons
const IconButton = styled.button`
    border: none;
    background-color: #f2f2f2;
    color: #777777;
    padding: 9px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;

    &:hover {
        background-color: #38a3db;
        color: #ffffff;
    }
`;

// the actual card comment
const PostCard = (props) => {
    return (
        <Card>
            <PostHeader>
                {/* show the user */}
                <Avatar src={props.avatar} alt={props.avatarAlt} />

                {/* showing the posts using props */}
                <PostTitle>{props.title}</PostTitle>
            </PostHeader>

            <Description>{props.description}</Description>

            {/* the edit and delete buttons */}
            <ButtonArea>
                <IconButton type="button">
                    <FaEdit />
                </IconButton>

                <IconButton type="button">
                    <FaTrash />
                </IconButton>
            </ButtonArea>
        </Card>
    );
};

export default PostCard;