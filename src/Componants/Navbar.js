import React from "react";

function Navbar(props) {
  // console.log(props.logo);

  let navdata = props.navlinks;

  // console.log(navdata);

  return (
    <>
      <header>
        <div className="nav_bar">
          <div className="container">
            <div className="w_100">
              <div className="w_30">
                <div className="logo_wrap">
                  <a href="/">
                    <h1 className="logo">{props.logo}</h1>
                  </a>
                  {/* <a href="/" className='emailid' >harsh.cdmi@gmail.com</a> */}
                </div>
              </div>
              <div className="w_70">
                <ul className="main_menu">
                  {navdata?.map((item) => {
                    return (
                      <li className="main_link">
                        <a href={`#${item.link}`}>{item.text}</a>
                      </li>
                    );
                  })}

                  <li>
                    <a href="/" className="btn btn_primary">
                      Hire Me!
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
