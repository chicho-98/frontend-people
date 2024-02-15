import React from "react";
import "./PersonnelCard.css";
import { BsFillTrashFill } from "react-icons/bs";

const PersonnelCard = ({ person }) => {
  return (
    <div className="personnel-card">
      <span className="delete-btn"><BsFillTrashFill /></span>
      <h3 className="name">{person.name}</h3>
      <h5 className="field">edad: {person.age}</h5>
      <h5 className="field">país: {person.country}</h5>
      <h5 className="field">email: {person.email}</h5>
    </div>
  );
};

export default PersonnelCard;
