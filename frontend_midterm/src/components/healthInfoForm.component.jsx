import { useState } from "react";
import { HealthProfile } from "../model/healthProfile";
import axios from "axios";

export default function HealthForm() {
  const healthProfile = new HealthProfile();
  const [inputs, setInputs] = useState(healthProfile);

  const handleInputChange = (event) => {
    // const { name, value } = e.target;
    // console.log(name);

    // setInputs({
    //   ...inputs,
    //   [name]: name === "mobile" ? parseInt(value, 10) : value,
    // });
    const { name, value } = event.target;
    // Create a copy of the current state
    const newInputs = { ...inputs };

    // Use split('.') to handle nested properties
    const nameParts = name.split(".");
    if (nameParts.length === 1) {
      newInputs[name] = name === "mobile" ? parseInt(value, 10) : value;
    } else if (nameParts.length === 2) {
      newInputs[nameParts[0]][nameParts[1]] = value;
    } else if (nameParts.length === 3) {
      newInputs[nameParts[0]][nameParts[1]][nameParts[2]] = value;
    }

    // Update the state
    setInputs(newInputs);
  };

  const handleSubmit = async (event) => {
    console.log(inputs);
    event.preventDefault();

    const apiUrl = "http://localhost:8202/api/v1/userInfo/create";
    const authToken = localStorage.getItem("token");

    console.log(authToken);

    axios
      .post(apiUrl, inputs, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        console.log("Post request successful:", response);
      })
      .catch((error) => {
        console.error("Error making the POST request:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Info</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Mobile:
        <input
          type="number"
          name="mobile"
          value={inputs.mobile}
          onChange={handleInputChange}
        />
      </label>

      <h2>Personal Info</h2>
      <label>
        Address:
        <input
          type="text"
          name="personal.address"
          value={inputs.personal.address}
          onChange={handleInputChange}
        />
      </label>
      <label>
        District:
        <input
          type="text"
          name="personal.district"
          value={inputs.personal.district}
          onChange={handleInputChange}
        />
      </label>

      <h2>Additional Info</h2>
      <label>
        Road:
        <input
          type="text"
          name="personal.additional.road"
          value={inputs.personal.additional.road}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Bus:
        <input
          type="text"
          name="personal.additional.bus"
          value={inputs.personal.additional.bus}
          onChange={handleInputChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
