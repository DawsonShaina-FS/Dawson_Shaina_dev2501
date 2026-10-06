// importing the button
import Button from "./button";
import styled from "styled-components";

// styling the form
const FormContainer = styled.form`
    background-color: #ffffff;
    padding: 25px;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
`;

// styling the labels
const FormLabel = styled.label`
    color: #555555;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
`;

// styling the title input
const TitleInput = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    margin-bottom: 20px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    outline: none;
    font-size: 14px;

    &:focus {
        border-color: #38a3db;
    }

    &::placeholder {
        color: #aaaaaa;
    }
`;

// styling the description input
const DescriptionInput = styled.textarea`
    width: 100%;
    box-sizing: border-box;
    min-height: 100px;
    padding: 12px;
    margin-bottom: 20px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    outline: none;
    resize: vertical;
    font-family: inherit;
    font-size: 14px;

    &:focus {
        border-color: #38a3db;
    }

    &::placeholder {
        color: #aaaaaa;
    }
`;

// form component
const Form = (props) => {
    return (
        <FormContainer>
            {/* input for the post title*/}
            <FormLabel htmlFor="postTitle">{props.titleLabel}</FormLabel>

            <TitleInput
                id="postTitle"
                type="text"
                placeholder={props.titlePlaceholder}
            />

            {/* post desc input*/}
            <FormLabel htmlFor="postDescription">
                {props.descriptionLabel}
            </FormLabel>

            <DescriptionInput
                id="postDescription"
                placeholder={props.descriptionPlaceholder}
            ></DescriptionInput>

            {/*adding the button */}
            <Button
                type="submit"
                text={props.buttonText}
            />
        </FormContainer>
    );
};

// so the form can be used in app
export default Form;