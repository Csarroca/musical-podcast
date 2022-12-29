import FilterStyled from "./FilterStyled";

const Filter = ({ search, searcher, results }) => {
  return (
    <FilterStyled className="filter">
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder=" Filter podcasts..."
        className="filter__input"
      />

      <span className="filter__counter">{results}</span>
    </FilterStyled>
  );
};

export default Filter;
