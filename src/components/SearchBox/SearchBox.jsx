import css from "./SearchBox.module.css";

function SearchBox({ inputValue, onChange }) {
function handleChange(evt){
    onChange(evt.target.value)
}

  return (
    <>
      <p>Find contacts by name</p>
      <input className={css.input}
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </>
  );
}

export default SearchBox;
