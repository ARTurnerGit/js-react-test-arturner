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
});
