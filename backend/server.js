const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
// const data = require("./data.json");
const connectDB = require("./db/db");
const dotenv = require("dotenv").config();
const asyncHandler = require("express-async-handler");
const Todo = require("./models/todo");

const port = 4444;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get(
  "/todos",
  asyncHandler(async (req, res) => {
    const todos = await Todo.find({});
    res.send(todos);
  })
);

app.post(
  "/todos/new",
  asyncHandler(async (req, res) => {
    if (!req.body.name) {
      res.status(400).send("Invalid data");
    }
    const { name } = req.body;
    console.log(name);
    const todo = await Todo.create({ name });
    res.send(todo);
  })
);

app.patch(
  "/todos/edit/:id",
  asyncHandler(async (req, res) => {
    if (!req.params) {
      res.status(400).send("Invalid data");
    }
    console.log(req.params);
    const { id } = req.params;
    const todo = await Todo.findById(id);
    todo.completed = !todo.completed;
    await todo.save();
    res.send(todo);
  })
);

app.post(
  "/todos/deletemany",
  asyncHandler(async (req, res) => {
    if (!req.body.idsToDelete) {
      res.status(400).send("Invalid data");
    }

    const { idsToDelete } = req.body;

    await Todo.deleteMany({
      _id: { $in: idsToDelete },
    });

    // idsToDelete.map(async (id) => {
    //   try {
    //     await Todo.deleteOne({ _id: id });
    //   } catch (e) {
    //     console.log(error);
    //     res.status(400).send("Error", error);
    //   }
    // });

    const todos = await Todo.find({});
    res.send(todos);
  })
);

app.delete(
  "/todos/:id",
  asyncHandler(async (req, res) => {
    if (!req.params.id) {
      res.status(400).send("Invalid id");
    }
    await Todo.findByIdAndDelete(req.params.id);
    res.send("Usuniete");
  })
);

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
