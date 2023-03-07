// import { MenuIcon } from "../Icons/MenuIcons";

interface SearchProps {
  onChange?: (key: any) => void;
  onClick?: () => void;
  onSubmit?: (value : any) => void;
  placeholder? : string;
  initialValue? : string;
  name: string;
}

const SearchBox = ({ onChange, name, onClick, placeholder, onSubmit, initialValue }: SearchProps) => {
  return (
    <div className="searchbox">
      {/* <form onSubmit={onSubmit}> */}
        <input name={name} placeholder={placeholder} onChange={onChange} value={initialValue} onKeyDown={onSubmit} />
        {/* <div onClick={onClick}>{MenuIcon.search}</div> */}
      {/* </form> */}
    </div>
  );
};

export default SearchBox;
