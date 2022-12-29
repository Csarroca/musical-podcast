const Filter = ({ search, searcher }) => {
  return (
    <div className="filter">
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder=" Filter podcasts..."
        className=""
      />
      <span>100</span>
    </div>
  );
};

export default Filter;
