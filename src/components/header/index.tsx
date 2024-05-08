import React from "react";
import Link from "next/link";
import "../../sass/style.css";
const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <h1>Where in the world?</h1>
          <div className="Links">
            <Link href="/">
              <p className="dark-p">Home</p>
            </Link>
            <Link href="/countries">
              <p className="dark-p">Country</p>
            </Link>
            <Link href="/contact">
              <p className="dark-p">Contact</p>
            </Link>
            <Link href="/profile">
              <p className="dark-p">Profile</p>
            </Link>
            <Link href="/blog">
              <p className="dark-p">Blog</p>
            </Link>
          </div>
          <button className="darkk">
            <p className="dark-p">Dark Mode</p>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
