import PodcastCardStyled from "./PodcastCardStyled";

const PodcastCard = ({ podcast }) => {
  return (
    <>
      <PodcastCardStyled>
        <img
          className="podcast-card__cover"
          src={podcast["im:image"][0].label}
          alt={`${podcast["im:name"].label} podcast cover`}
          height={55}
          width={55}
        />
        <h2 className="podcast-card__name">{podcast["im:name"].label}</h2>
        <span className="podcast-card__info">
          Author:{podcast["im:artist"].label}
        </span>
      </PodcastCardStyled>
    </>
  );
};

export default PodcastCard;
