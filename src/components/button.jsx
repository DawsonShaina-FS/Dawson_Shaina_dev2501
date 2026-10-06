// component gets text through props
const Button = (props) => {
    return (
        // the button type and text through props
        <button type={props.type}>
            {props.text}
        </button>
    );

};
// makes button available to use in other components
export default Button;