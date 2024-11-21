import { createServer } from "miragejs";
import { faker } from "@faker-js/faker";

export default function startServer() {
  createServer({
    routes() {
      this.namespace = "api";
      this.timing = 2000;

      this.get("/users/:amount", (_, request) => {
        let amount = request.params.amount;

        let post = generatePosts(amount);

        let jsonPost = JSON.stringify(post);

        return jsonPost;
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
