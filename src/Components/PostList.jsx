import DropDown from "./ArticleStub.jsx";
import { createServer } from "miragejs";
import { faker, Faker } from "@faker-js/faker";
import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

let server = createServer();
server.get("/api/users", {
  users: [
    { name: faker.person.fullName(), country: faker.location.country() },
    { name: faker.person.fullName(), country: faker.location.country() },
    { name: faker.person.fullName(), country: faker.location.country() },
    { name: faker.person.fullName(), country: faker.location.country() },
  ],
});

// let [users, setUsers] = useState([]);



//   let [users, setUsers] = useState([]);
//  useEffect(() => {
//    fetch("/api/users")
//      .then((res) => res.json())
//      .then((json) => {
//        setUsers(users.concat(json.users));
//      });
//  }, []);

//TODo: update to take stubProp
function PostList() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.users);
      });
  }, []);

  // function addUser() {
  //   useEffect(() => {
  //     fetch("/api/users")
  //       .then((res) => res.json())
  //       .then((json) => {
  //         setUsers(users.concat(json.users));
  //       });
  //   }, []);
  // }

  return (
    <Accordion defaultActiveKey='0'>
      {/* TODO:Refactor to use map */}
      {users.map((user) => (
        <DropDown
          data-bs-target={user.name}
          id={user.name}
          name={user.name}
          country={user.country}
        />
      ))}
      ;
    </Accordion>
  );
}

export default PostList;
