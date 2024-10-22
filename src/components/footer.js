import React from "react"
import "../components/global.css"

const Footer = () => {
  return (
    <div>
      <footer>
        <div>
          © {new Date().getFullYear()},{` `}
          <a
            href="https://github.com/ aaddii104"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aditya Sharma
          </a>
        </div>
        <div>
          <a
            href="https://github.com/aaddii104"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/github.svg")}
              width="25px"
              alt="github logo"
            />
          </a>
          <a
            href="https://instagram.com/aaddii104"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../images/insta.svg")}
              width="25px"
              alt="instagram logo"
            />
          </a>
          <a
            href="https://twitter.com/aaddii104"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span id="insta">
              <img
                src={require("../images/twitter.svg")}
                width="40px"
                alt="twitter logo"
              />
            </span>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
