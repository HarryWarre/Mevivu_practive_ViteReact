import React from "react";
import "../styles/FloatAddButton.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
function AddButton() {
  return (
    <Link to="/create" className="float">
      <FontAwesomeIcon icon={faPlus} className="my-float" />
    </Link>
  );
}

export default AddButton;
