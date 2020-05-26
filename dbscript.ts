import config from "./knexfile";
import knexfunc from "knex";
const knex = knexfunc(config);

const initialDB = {
  users: [
    {
      id: 1,
      email: "yoneda@yoneda.com",
      password: "",
      bio: "hi, I like javascript",
      createdAt: "2020-5-5 10:00:00",
    },
    {
      id: 1,
      email: "tanaka@tanaka.com",
      password: "",
      bio: "hi, I like javascript",
      createdAt: "2020-5-5 10:00:00",
    },
  ],
  tasks: [
    {
      id: 1,
      title: "clean my room",
      checked: false,
      createdAt: "2020-5-5 10:00:00",
      updatedAt: "2020-5-5 10:00:00",
      user: 1,
    },
    {
      id: 2,
      title: "go travel to fukuoka in Japan",
      checked: false,
      createdAt: "2020-5-5 10:00:00",
      updatedAt: "2020-5-5 10:00:00",
      user: 1,
    },
    {
      id: 3,
      title: "wash my hands",
      checked: false,
      createdAt: "2020-5-5 10:00:00",
      updatedAt: "2020-5-5 10:00:00",
      user: 2,
    },
  ]
};

const seed = async function () {
  await knex("users")
    .del()
    .then(() => knex("users").insert(initialDB.users));
  await knex("bookmarks")
    .del()
    .then(() => knex("bookmarks").insert(initialDB.bookmarks));
};

const migrate = async function () {
  return await knex.schema
    .createTable("users", (table) => {
      table.increments("id");
      table.string("email");
      table.string("password");
    })
    .createTable("bookmarks", (table) => {
      table.increments("id");
      table.string("title");
      table.string("url");
      table.integer("user");
    });
};

const drop = async function () {
  await knex.schema.dropTable("users").dropTable("bookmarks");
};

(async function () {
  const arg = process.argv[2];
  if (arg === "--migrate") {
    await migrate();
  } else if (arg === "--seed") {
    await seed();
  } else if (arg === "--drop") {
    await drop();
  }
  process.exit();
})();
