import { useState } from "react";
import "./Header.css";

const Header = ({ addPerson }) => {
  //   const [formState, setFormState] = useState({
  //     name: "",
  //     age: 0,
  //     email: "",
  //     country: "",
  //   });

  //   const handleChange = (e) => {
  //     setFormState({ ...formState, [e.target.id]: e.target.value });
  //   };
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const person = {
      name: name,
      age: age,
      country: country,
      email: email,
    };
    addPerson(person);
    post(person);
  };

  function post(person) {
    fetch("https://people-service-9zf8.onrender.com/people", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(person),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomNumber() {
    const n = getRandomInt(70);
    if (n < 18) {
      return n + 20;
    }
    return n;
  }

  const handleGenerate = () => {
    fetch("https://random-data-api.com/api/v2/users?size=1&is_json=true")
      .then((response) => response.json())
      .then((data) => fillOutValues(data))
      .catch((error) => console.log(error));
  };

  const fillOutValues = (data) => {
    // setFormState({
    //   ...formState,
    //   name: `${data.first_name} ${data.last_name}`,
    //   age: getRandomNumber(),
    //   email: data.email,
    // });
    setName(`${data.first_name} ${data.last_name}`);
    setAge(getRandomNumber());
    setEmail(data.email);
  };
  return (
    <header className="header">
      <input
        type="text"
        id="name"
        placeholder="nombre"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="number"
        id="age"
        placeholder="edad"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        id="country"
        placeholder="país"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <input
        type="email"
        id="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="button-32" onClick={handleGenerate}>
        Generate
      </button>
      <button className="button-34" onClick={handleSubmit}>Submit</button>
    </header>
  );
};

export default Header;
