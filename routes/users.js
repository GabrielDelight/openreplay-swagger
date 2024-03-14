// routes/users.js

const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users
 *     responses:
 *       '200':
 *         description: A list of users
 */
router.get("/users", (req, res) => {
  // Your logic to get all users
  res.send([
    {
      username: "Mike John",
      age: 20,
      email: "mike@gmail.com",
    },
    {
      username: "Jane Smith",
      age: 50,
      email: "jane@gmail.com",
    },
  ]);
});

/**
 * @swagger
 * /create-new-users:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user with the provided data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               age:
 *                 type: number
 *     responses:
 *       '200':
 *         description: User created successfully
 *       '400':
 *         description: Bad request
 */
router.post("/create-new-users", (req, res) => {
  // Your logic to create a new user
  res.send({
    message: "User created successfully",
  });
});

module.exports = router;
