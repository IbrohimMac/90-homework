import React from "react";
import "../../sass/style.css";
import Image from "next/image";
import Link from "next/link";

const Country = () => {
  return (
    <div>
      <main>
        <section>
          <div className="mainFIrst">
            <div className="search">
              <input
                className="searchIn"
                type="text"
                placeholder="Search ..."
              />
            </div>
            <div className="BigDrop">
              {/* <div className="miniDrop">
                <p>Filter Region</p>
              </div>
              <div className="drop-p dropped">
                <p id="regg" className="region">
                  All
                </p>
                <br />
                <p id="regg" className="region">
                  Africa
                </p>
                <br />
                <p id="regg" className="region">
                  America
                </p>
                <br />
                <p id="regg" className="region">
                  Asia
                </p>
                <br />
                <p id="regg" className="region">
                  Europe
                </p>
                <br />
                <p id="regg" className="region">
                  Oceania
                </p>
              </div> */}
              <select className="Regions">
                <option value="Filter by Region">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="mainSecond">
            <div className="flags">
              <Link href="/countries">
                <div className="flags-1">
                  <Image
                    src="/Germany.png"
                    width={267}
                    height={160}
                    alt="Germany"
                  />
                  <h2>Germany</h2>
                  <p>Population: 81,770,900</p>
                  <p>Region: Europe</p>
                  <p>Capital: Berlin</p>
                </div>
              </Link>
              <div className="flags-1">
                <Image src="/Usa.png" width={267} height={160} alt="Usa" />
                <h2>United States of America</h2>
                <p>Population: 323,947,000</p>
                <p>Region: Americas</p>
                <p>Capital: Washington, D.C.</p>
              </div>
              <div className="flags-1">
                <Image
                  src="/Brazil.png"
                  width={267}
                  height={160}
                  alt="Brazil"
                />
                <h2>Brazil</h2>
                <p>Population: 206,135,893</p>
                <p>Region: Americas</p>
                <p>Capital: Brasília</p>
              </div>
              <div className="flags-1">
                <Image
                  src="/Iceland.png"
                  width={267}
                  height={160}
                  alt="Iceland"
                />
                <h2>Iceland</h2>
                <p>Population: 334,300</p>
                <p>Region: Europe</p>
                <p>Capital: Reykjavík</p>
              </div>
              <div className="flags-1">
                <Image
                  src="/Afganistan.png"
                  width={267}
                  height={160}
                  alt="Afganistan"
                />
                <h2>Afghanistan</h2>
                <p>Population: 27,657,145</p>
                <p>Region: Asia</p>
                <p>Capital: Kabul</p>
              </div>
              <div className="flags-1">
                <Image src="/Aland.png" width={267} height={160} alt="Aland" />
                <h2>Åland Islands</h2>
                <p>Population: 28,875</p>
                <p>Region: Europe</p>
                <p>Capital: Mariehamn</p>
              </div>
              <div className="flags-1">
                <Image
                  src="/Albania.png"
                  width={267}
                  height={160}
                  alt="Albania"
                />
                <h2>Albania</h2>
                <p>Population: 2,886,026</p>
                <p>Region: Europe</p>
                <p>Capital: Tirana</p>
              </div>
              <div className="flags-1">
                <Image
                  src="/Algeria.png"
                  width={267}
                  height={160}
                  alt="Algeria"
                />
                <h2>Algeria</h2>
                <p>Population: 40,400,000</p>
                <p>Region: Africa</p>
                <p>Capital: Algiers</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Country;
