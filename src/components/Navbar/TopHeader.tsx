import SearchBox from "../SearchBox/SearchBox";
import MenuIcon from "../../../public/icons/menu.svg";
import Image from "next/image";
import { useState } from "react";

interface HeaderObj {
  content?: React.ReactNode;
}

const TopHeader = ({ content }: HeaderObj) => {
  const [show, setShow] = useState(false);
  const handleMenuClick = () => {
    setShow(!show);
  }
  const handleChange = (e : any) => {
    if(e.key === 'Enter' || e.keyCode === 13 ){
      console.log('you press enter')
    }
  }
  const handleSubmit = (e : any) => {
    if(e.key === 'Enter' || e.keyCode === 13 ){
      console.log('you press enter')
    }
  }
  return (
    <div className="top-header">
      <div className="header-left">{content}</div>
      <div className="header-right">
        <SearchBox name='search-user' placeholder="Search Github User" onChange={() => handleChange} onSubmit={(e) => handleSubmit(e)} />
      </div>
      <div className="header-content">
        <>
          {content}
          <Image src={MenuIcon.src} alt="menu" width={24} height={24} onClick={handleMenuClick} />
          {show && (
            <div className="header-menu">
              <SearchBox name='search-user' onChange={() => handleChange} onSubmit={(e) => handleSubmit(e)} placeholder="Search Github User" />
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default TopHeader;
