async function loginUser(credentials) {
  console.log(JSON.stringify(credentials));
  return fetch("http://localhost:8202/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default loginUser;
