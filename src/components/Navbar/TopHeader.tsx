import SearchBox from "../SearchBox/SearchBox";
import MenuIcon from "../../../public/icons/menu.svg";
import Image from "next/image";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { onSearch } from "@/state/SearchReducer";
import React from "react";

interface HeaderObj {
  content?: React.ReactNode;
}

const TopHeader = ({ content }: HeaderObj) => {
  const [show, setShow] = useState(false);
  const searchRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const handleMenuClick = () => {
    setShow(!show);
  }
  const dispatch = useDispatch();

  const handleSubmit = (e : any) => {
    if(e.key === 'Enter' || e.keyCode === 13 ){
      dispatch(onSearch(e.target.value));
      setShow(false);
      
    }
  }

  const handleClick = () => {
    if(searchRef.current.value){
      dispatch(onSearch(searchRef.current.value));
    }
  }


  return (
    <div className="top-header">
      <div className="header-left">{content}</div>
      <div className="header-right">
      <SearchBox name='search-user' innerRef={searchRef} onClick={handleClick} onSubmit={(e) => handleSubmit(e)} placeholder="Search Github User" />
      </div>
      <div className="header-content">
        <>
          {content}
          <Image src={MenuIcon.src} alt="menu" width={24} height={24} onClick={handleMenuClick} />
          {show && (
            <div className="header-menu">
              <SearchBox name='search-user' innerRef={searchRef} onClick={handleClick} onSubmit={(e) => handleSubmit(e)} placeholder="Search Github User" />
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default TopHeader;
