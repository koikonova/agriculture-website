import React, { useState } from "react";
import Form from "../Form";
import Logo from "../../assets/Logo.png";
import Button from "../Button";
import "./Header.scss";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [isPagesMenuOpen, setIsPagesMenuOpen] = useState<boolean>(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const togglePagesMenu = () => {
    setIsPagesMenuOpen(!isPagesMenuOpen);
  };

  return (
    <header className="header">
      <div className="navigation">
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <div className="brand">Organick</div>
        </div>
        <nav className="menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a className="pages" onClick={togglePagesMenu}>
                Pages
              </a>
              <ul
                className={`pages-menu ${
                  isPagesMenuOpen ? "display-block" : "display-none"
                }`}
              >
                <li>
                  <a href="/page1">Page 1</a>
                </li>
                <li>
                  <a href="/page2">Page 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/project">Project</a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="search-cart">
        <div className="search">
          <Form
            inputType="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            buttonText=""
            buttonStyle="button-search"
            buttonType="submit"
            buttonIcon={
              <svg
                className="icon"
                viewBox="0 0 56 57"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="28" cy="28" r="28" />
                <path d="M40.4692 35.8921L35.7086 31.1315C36.8547 29.6057 37.4734 27.7485 37.4713 25.8402C37.4713 20.9657 33.5056 17 28.6312 17C23.7567 17 19.791 20.9657 19.791 25.8402C19.791 30.7146 23.7567 34.6803 28.6312 34.6803C30.5395 34.6824 32.3967 34.0637 33.9225 32.9175L38.6831 37.6781C38.9241 37.8936 39.2384 38.0085 39.5615 37.9995C39.8846 37.9905 40.192 37.8581 40.4205 37.6295C40.6491 37.401 40.7815 37.0936 40.7905 36.7705C40.7996 36.4474 40.6846 36.1331 40.4692 35.8921ZM22.3168 25.8402C22.3168 24.5913 22.6871 23.3705 23.3809 22.3321C24.0748 21.2937 25.061 20.4843 26.2148 20.0064C27.3686 19.5285 28.6382 19.4034 29.8631 19.6471C31.0879 19.8907 32.213 20.4921 33.0961 21.3752C33.9792 22.2583 34.5806 23.3834 34.8242 24.6083C35.0679 25.8332 34.9428 27.1028 34.4649 28.2566C33.987 29.4104 33.1777 30.3966 32.1393 31.0904C31.1009 31.7842 29.88 32.1546 28.6312 32.1546C26.9571 32.1526 25.3522 31.4866 24.1684 30.3029C22.9847 29.1192 22.3188 27.5142 22.3168 25.8402Z" />
              </svg>
            }
          />
        </div>
        <div className="cart">
          <Button
            text=""
            type="button"
            buttonStyle="button-cart"
            icon={
              <svg
                className="icon"
                viewBox="0 0 56 57"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="28" cy="28" r="28" />
                <path
                  className="wheels"
                  d="M25.5689 39.0001C26.2439 39.0001 26.7911 38.4529 26.7911 37.7779C26.7911 37.1029 26.2439 36.5557 25.5689 36.5557C24.8939 36.5557 24.3467 37.1029 24.3467 37.7779C24.3467 38.4529 24.8939 39.0001 25.5689 39.0001Z"
                />
                <path d="M34.1246 39.0001C34.7996 39.0001 35.3468 38.4529 35.3468 37.7779C35.3468 37.1029 34.7996 36.5557 34.1246 36.5557C33.4496 36.5557 32.9023 37.1029 32.9023 37.7779C32.9023 38.4529 33.4496 39.0001 34.1246 39.0001Z" />
                <path d="M15.791 17H19.5729L22.4093 33.0731H37.5369" />
                <path d="M21.9022 29.1837L37.1494 29.2907C37.2587 29.2908 37.3647 29.2529 37.4493 29.1837C37.5339 29.1144 37.5918 29.0179 37.6133 28.9107L39.3151 20.4014C39.3289 20.3328 39.3272 20.262 39.3102 20.1941C39.2933 20.1262 39.2615 20.063 39.2171 20.0089C39.1727 19.9548 39.1169 19.9112 39.0536 19.8813C38.9903 19.8514 38.9212 19.8359 38.8513 19.8359L20.3584 19.8359" />
              </svg>
            }
          />
          <span className="cart-items">Cart ({cartItems.length})</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
