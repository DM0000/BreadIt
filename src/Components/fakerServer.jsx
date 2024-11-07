import { createServer } from "miragejs";
import { faker, Faker } from "@faker-js/faker";
import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

function userPool ()  {[
    { name: faker.person.fullName(), country: faker.location.country() },
    { name: faker.person.fullName(), country: faker.location.country() },
    { name: faker.person.fullName(), country: faker.location.country() },
    { name: faker.person.fullName(), country: faker.location.country() },
];}

let server = createServer();

server.get("/api/users", {
  users: userPool,
});

function addUsers(num) {

  let [users, setUsers] = useState([])

  

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(users.concat(json.users))
      })
  }, [])



  for (num; num > 0; num--) {
    userPool.push({
      name: faker.person.fullName(),
      country: faker.location.country(),
    });
  }
}




