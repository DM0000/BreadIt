import { createServer } from "miragejs";
import { faker } from "@faker-js/faker";

export default function startServer() {
  createServer({
    routes() {
      this.namespace = "api";
      this.timing = 2000;

      this.get("/users/:amount", (_, request) => {
        let amount = request.params.amount;

        let posts = generatePosts(amount);

        return JSON.stringify(posts);
      });
    },
  });
}

function generatePosts(num) {
  let postList = [];

  for (let i = num; i > 0; i--) {
    postList.push({
      name: faker.person.fullName(),
      country: faker.location.country(),
    });
  }
  return postList;
}
