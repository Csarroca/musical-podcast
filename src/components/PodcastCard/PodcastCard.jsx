import PodcastCardStyled from "./PodcastCardStyled";

const PodcastCard = ({ podcast }) => {
  return (
    <>
      <PodcastCardStyled>
        <img
          className="podcast-card__cover"
          src={podcast.image}
          alt={`${podcast.name} podcast cover`}
          height={55}
          width={55}
        />
        <h2 className="podcast-card__name">{podcast.name}</h2>
        <span className="podcast-card__info">Author:{podcast.author}</span>
      </PodcastCardStyled>
    </>
  );
};

export default PodcastCard;
