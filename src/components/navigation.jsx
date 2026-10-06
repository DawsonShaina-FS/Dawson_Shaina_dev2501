// nav component getting the menu text through the props
const Navigation = (props) => {
    return (
        <nav>
            {/* nav title */}
            <h2>{props.title}</h2>

            {/* nav links using the text props*/}
            <a href="#newsfeed">{props.newsfeed}</a>
            <a href="#messages">{props.messages}</a>
            <a href="#watch">{props.watch}</a>
        </nav>
    );
};

export default Navigion;