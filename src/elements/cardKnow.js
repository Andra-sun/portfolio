const card = ({image, name}) => {
    return (
        <div>
            <img
                src={image}
                alt={name}
            />
            {name}
        </div>
    );
};
export default card;
