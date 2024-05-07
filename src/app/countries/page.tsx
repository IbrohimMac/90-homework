import React from "react";
import "../../sass/style.css";
import i1 from "../../../public/Germany.png";
import i2 from "../../../public/Usa.png";
import i3 from "../../../public/Brazil.png";
import i4 from "../../../public/Iceland.png";
import i5 from "../../../public/Afganistan.png";
import i6 from "../../../public/Aland.png";
import i7 from "../../../public/Albania.png";
import i8 from "../../../public/Algeria.png";
const Country = () => {
  return (
    <div>
      <main>
        <div className="mainFIrst">
          <div className="search">
            <input class="searchIn" type="text" placeholder="Search ..." />
          </div>
          <div class="BigDrop">
            <div class="miniDrop">
              <p>Filter Region</p>
            </div>
            <div class="drop-p dropped">
              <p id="regg" class="region">
                All
              </p>
              <br />
              <p id="regg" class="region">
                Africa
              </p>
              <br />
              <p id="regg" class="region">
                America
              </p>
              <br />
              <p id="regg" class="region">
                Asia
              </p>
              <br />
              <p id="regg" class="region">
                Europe
              </p>
              <br />
              <p id="regg" class="region">
                Oceania
              </p>
            </div>
          </div>
        </div>
        <div className="mainSecond">
          <div className="flags">
            <div className="flags-1">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus corrupti nihil asperiores atque facilis inventore
                voluptate optio, quidem, ad distinctio expedita rem labore
                assumenda earum architecto perspiciatis doloribus maiores
                perferendis.
              </p>
              <img src={i1} alt="" />
              <img src={i2} alt="" />
              <img src={i3} alt="" />
              <img src={i4} alt="" />
              <img src={i5} alt="" />
              <img src={i6} alt="" />
              <img src={i7} alt="" />
              <img src={i8} alt="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Country;
