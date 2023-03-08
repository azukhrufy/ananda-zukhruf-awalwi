import Image from 'next/image';
import React, {LegacyRef, MutableRefObject, useRef} from 'react';
import SearchIcon from '../../../public/icons/search.svg';

interface SearchProps {
  onChange?: (key: any) => void;
  onClick?: () => void;
  onSubmit?: (value : any) => void;
  placeholder? : string;
  initialValue? : string;
  name: string;
  innerRef? : any;
}

const SearchBox = ({ onChange,innerRef, name, onClick, placeholder, onSubmit, initialValue }: SearchProps) => {
  const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  return (
    <div className="searchbox">
        <input ref={innerRef} name={name} placeholder={placeholder} onChange={onChange} value={initialValue} onKeyDown={onSubmit} />
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
