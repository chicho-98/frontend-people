import React from "react";
import "./PersonnelCard.css";
import { BsFillTrashFill } from "react-icons/bs";

const PersonnelCard = ({ person, deletePerson }) => {
  const handleDelete = () => {
    commitDelete(person);
  };

  function commitDelete(person) {
    fetch("https://people-service-9zf8.onrender.com/person/" + person.id, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        deletePerson(person);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="personnel-card">
      <span className="delete-btn" onClick={handleDelete}>
        <BsFillTrashFill />
      </span>
      <h3 className="name">{person.name}</h3>
      <h5 className="field">edad: {person.age}</h5>
      <h5 className="field">país: {person.country}</h5>
      <h5 className="field">email: {person.email}</h5>
    </div>
  );
};

export default PersonnelCard;
