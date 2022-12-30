const SideCard = ({ podcast }) => {
  return (
    <>
      <img
        className="side-card__cover"
        src={podcast.image}
        alt={`${podcast.name} podcast cover`}
        height={55}
        width={55}
      />
      <h2 className="side-card__name">{podcast.name}</h2>
      <h3 className="side-card__author">Author: {podcast.author}</h3>

      <p className="side-text">
        {" "}
        Description:
        {podcast.description}
      </p>
    </>
  );
};

export default SideCard;
