import React from "react";
import loadingIcon from "../../assets/icons/loader.svg";
import "./Loader.scss";

function Loader() {
  return (
    <div className='loader'>
      <img src={loadingIcon} id='loader' alt='loading' />
    </div>
  );
}

export default Loader;
