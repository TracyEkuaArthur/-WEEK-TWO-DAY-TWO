fetch("users.json")
  .then((res) => {
    return res.json;
  })
  .catch((error) => {
    console.log(error);
  });

async function getAllUser() {
  const response = await fetch("users.json");
  console.log(response);
  const data = await response.json();
  console.log(data);
}
getAllUser();

const url = "http://localhost:3000/users";

async function getUser(userId) {
  const response = await fetch(`${url}/${userId}`);
  const data = await response.json();
  console.log(data);
}

getUser(2);

let user = {
  firstName: "John",
  lastName: "Doe",
  userName: "JohnDoe",
  email: "john.doe@gmail.com",
  gender: "Male",
};

async function createUser(userInfo) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}
createUser(user);

let userData = {
  email: "tracy@gmail.com",
};

async function updateUser(userId, userdata) {
  const response = await fetch(`${url}/${userId}`, {
    method: "PATCH",
    body: JSON.stringify(userdata),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}

updateUser(32, userData);

async function deleteUser(userId) {
  const response = await fetch(`${url}/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
};

// deleteUser(12)