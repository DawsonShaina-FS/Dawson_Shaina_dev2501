// advertisement card component
const AdCard = (props) => {
    return (
        <article>
            {/* the ad image going through props */}
            <img src={props.image} alt={props.imageAlt} />

            {/* showing the ad info */}
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
        </article>
    );
};

export default AdCard;