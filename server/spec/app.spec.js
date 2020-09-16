const chai = require("chai");
const { expect } = chai;
const request = require("supertest");
const app = require("../src/server");
const { db } = require("../db/dbConfig");

after(() => {
  return db.destroy();
});

describe("APP", () => {
  it("404: msg 'path not found' if non-existant path is used", () => {
    return request(app)
      .get("/not_a_path")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).to.equal("path not found");
      });
  });
  describe("/create", () => {
    describe("INVALID METHODS", () => {
      it("405: msg 'invalid method' if any method other than post used", () => {
        let invalidMethods = ["get", "put", "patch", "delete"];
        let requests = invalidMethods.map((method) => {
          return request(app)
            [method]("/create")
            .expect(405)
            .then(({ body }) => {
              expect(body.msg).to.equal("invalid method");
            });
        });
        return Promise.all(requests);
      });
    });
    describe("POST", () => {
      it("201: msg 'Message successfully sent' with successful post", () => {
        let body = {
          first_name: "Tester",
          last_name: "One",
          email: "Test@email.com",
          phone: "0123400",
          message_text: "This is a test from Mocha",
        };
        return request(app)
          .post("/create")
          .send(body)
          .expect(201)
          .then(({ body }) => {
            expect(body).to.have.key("msg");
            expect(body.msg).to.equal("Message successfully sent");
          });
      });
      it("400: msg 'Bad request' if missing first_name", () => {
        let body = {
          last_name: "One",
          email: "Test@email.com",
          phone: "0123400",
          message_text: "This is a test from Mocha",
        };
        return request(app)
          .post("/create")
          .send(body)
          .expect(400)
          .then(({ body }) => {
            expect(body).to.have.key("msg");
            expect(body.msg).to.equal("Bad request");
          });
      });
      it("400: msg 'Bad request' if missing last_name", () => {
        let body = {
          first_name: "Tester",
          email: "Test@email.com",
          phone: "0123400",
          message_text: "This is a test from Mocha",
        };
        return request(app)
          .post("/create")
          .send(body)
          .expect(400)
          .then(({ body }) => {
            expect(body).to.have.key("msg");
            expect(body.msg).to.equal("Bad request");
          });
      });
      it("400: msg 'Bad request' if missing email", () => {
        let body = {
          first_name: "Tester",
          last_name: "something",
          phone: "0123400",
          message_text: "This is a test from Mocha",
        };
        return request(app)
          .post("/create")
          .send(body)
          .expect(400)
          .then(({ body }) => {
            expect(body).to.have.key("msg");
            expect(body.msg).to.equal("Bad request");
          });
      });
      it("400: msg 'Bad request' if missing message_text", () => {
        let body = {
          first_name: "Tester",
          last_name: "something",
          email: "something",
          phone: "0123400",
        };
        return request(app)
          .post("/create")
          .send(body)
          .expect(400)
          .then(({ body }) => {
            expect(body).to.have.key("msg");
            expect(body.msg).to.equal("Bad request");
          });
      });
    });
  });
  describe("/admin", () => {
    describe("INVALID METHODS", () => {
      it("405: msg 'invalid method' if any method other than get used", () => {
        let invalidMethods = ["post", "put", "patch", "delete"];
        let requests = invalidMethods.map((method) => {
          return request(app)
            [method]("/admin")
            .expect(405)
            .then(({ body }) => {
              expect(body.msg).to.equal("invalid method");
            });
        });
        return Promise.all(requests);
      });
    });
    describe("GET", () => {
      it("200: returns json, key of results, value is an array", () => {
        return request(app)
          .get("/admin")
          .expect(200)
          .then(({ body }) => {
            expect(body).to.have.key("results");
            expect(body.results).to.be.an("array");
          });
      });
      // this test is to check the initial seeding and will only pass if run before any data has been added to the database
      // it("200: returns the initial seeded values", () => {
      //   return request(app)
      //     .get("/admin")
      //     .expect(200)
      //     .then(({ body }) => {
      //       expect(body.results.length).to.equal(5);
      //     });
      // });
    });
  });
});
