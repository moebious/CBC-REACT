import SearchBar from "material-ui-search-bar";

export default function Searchbar({ search, setsearch, action }) {
  function handleClick(e) {
    setsearch(e);
  }

  function handleChange(e) {
    setsearch(e);
  }

  return (
    <div className="search">
      {/* <img className="logo" src={logo} alt="" width="70px" height="70px" /> */}
      <SearchBar
        onChange={handleChange}
        onRequestSearch={handleClick}
        style={{
          margin: "0 400px",
          width: "800px",
          minWidth: "300px",
        }}
      />
    </div>
  );
}
