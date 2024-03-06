import "./App.css";
import PersonnelCard from "./Components/PersonnelCard";
import Header from "./Components/Header";
import { useState, useEffect } from "react";

function App() {
  const [people, setPeople] = useState([
    {
      id: "",
      name: "",
      age: "",
      country: "",
      email: "",
    },
  ]);

  const addPerson = (person) => {
    setPeople([...people, person]);
  };

  const deletePerson = (person) => {
    const people1 = people.filter((p) => {
      if (person.id !== p.id) {
        return p;
      }
    });
    setPeople(people1);
  };

  useEffect(() => {
    fetch("https://people-service-9zf8.onrender.com/person")
      .then((response) => response.json())
      .then((data) => setPeople(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header addPerson={addPerson} />
      <div className="container">
        {people.map((p, index) => {
          return (
            <PersonnelCard key={index} person={p} deletePerson={deletePerson} />
          );
        })}
      </div>
    </>
  );
}

export default App;
