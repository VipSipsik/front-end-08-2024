import { useState } from "react";

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState(null);

    const resetTheme = () => {
        setTheme(null);
    };

    const themeClass = theme ? theme.toLowerCase() : "secondary";
   
    return (
        <>
        <div
          className={`text-capitalize h1 mb-4 w-100 text-center text-${themeClass}`}
        >
          {`${theme || "Default"} Theme`}
        </div>
        <div className="btn-group">
          <button className={`text-capitalize btn btn-${themeClass} btn-lg"`} type="button">
            {theme ? theme + " theme" : "Choose Theme"}
          </button>
          <button
            type="button"
            className={`btn btn-lg btn-${themeClass} dropdown-toggle dropdown-toggle-split`}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <div className="dropdown-menu">
            {/* WHERE TO PUT "href" */}
            <a href className="dropdown-item" onClick={() => setTheme("primary")}> 
              Primary Theme
            </a>
            <a href className="dropdown-item" onClick={() => setTheme("danger")}>
              Danger Theme
            </a>
            <button className="dropdown-item" onClick={() => setTheme("primary")}> Primary Theme</button>
            <button className="dropdown-item" onClick={() => setTheme("danger")}> Danger Theme</button>
            <button className="dropdown-item" onClick={() => setTheme("success")}> Success Theme</button>
            <button className="dropdown-item" href="#" onClick={() => resetTheme()}> Default Theme</button>
{/* 
            <a
              className="dropdown-item" onClick={() => setTheme("success")}>
              Success Theme
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#" onClick={() => resetTheme()}>
              Default Theme
            </a> */}

          </div>
        </div>
      </>
    );
  };
  export default ThemeSwitcher;