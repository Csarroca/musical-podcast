import { useNavigate } from "react-router-dom";
import SideCardStyled from "./SideCardStyled";

const SideCard = ({ podcast }) => {
  const navigate = useNavigate();

  return (
    <SideCardStyled
      onClick={() => {
        navigate(`/podcast/${podcast.id}`);
      }}
    >
      <section className="side-card__image-container">
        <img
          className="side-card__cover"
          src={podcast.image}
          alt={`${podcast.name} podcast cover`}
          height={150}
          width={150}
        />
      </section>

      <section className="side-card__info">
        <h2 className="side-card__name">{podcast.name}</h2>
        <span className="side-card__author">by {podcast.author}</span>
      </section>

      <section className="side-card__description">
        Description:
        <p className="side-card__description-text">{podcast.description}</p>
      </section>
    </SideCardStyled>
  );
};

export default SideCard;
