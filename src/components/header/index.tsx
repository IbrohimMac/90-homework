import React from "react";
import Link from "next/link";
import "../../sass/style.css";
const Header = () => {
  return (
    <header>
      <dixv className="container">
        <nav>
          <h1>Where in the world?</h1>
          <div className="Links">
            <Link href="/">Home</Link>
            <Link href="/countries">Country</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <button class="darkk">
            <p class="dark-p">Dark Mode</p>
          </button>
        </nav>
      </dixv>
    </header>
  );
};

export default Header;
