import Image from 'next/image';
import SearchIcon from '../../../public/icons/search.svg';

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
        <input name={name} placeholder={placeholder} onChange={onChange} value={initialValue} onKeyDown={onSubmit} />
        <div onClick={onClick}>
          <Image 
            src={SearchIcon.src}
            alt='search'
            width={18}
            height={18}
          />
        </div>
    </div>
  );
};

export default SearchBox;
