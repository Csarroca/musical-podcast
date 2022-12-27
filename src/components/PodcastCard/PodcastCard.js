import PodcastCardStyled from "./PodcastCardStyled";

const PodcastCard = ({ image, name, author }) => {
  return (
    <>
      <PodcastCardStyled>
        <img
          className="podcast-card__cover"
          src={image}
          alt={`${name} podcast cover`}
          height={55}
          width={55}
        />
        <h2 className="podcast-card__name">{name}</h2>
        <span className="podcast-card__info"> Author:{author} </span>
      </PodcastCardStyled>
    </>
  );
};

export default PodcastCard;
