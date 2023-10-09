const Search = () => {
  return (
    <div className="navbar bg-base-100 w-full">
      <div className="form-control w-full">
        <input
          type="text"
          placeholder="Search for drink"
          className="input input-bordered w-full md:w-auto"
        />
      </div>
    </div>
  );
};

export default Search;
