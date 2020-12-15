import React from "react";
import { Main } from "../interfaces";

interface Props {
  data: Main;
}

const Footer: React.FC<Props> = ({ data }) => {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {data.social.map((network) => {
              return (
                <li key={network.name}>
                  <a href={network.url}>
                    <i className={network.className}></i>
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="copyright">
            {/* <li>
                &copy; All credit goes to Tim Baker - Copyright 2017 Tim Baker
              </li> */}
            <li>
              Copyright{" "}
              <a title="Henry LeCompte" href="https://www.henrylec.dev/">
                Henry LeCompte
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
