import pool from "./pool.js";

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertUsername(author, username) {
  await pool.query("INSERT INTO messages (author,message) VALUES ($1,$2)", [
    author,
    username,
  ]);
}

export {
  getAllUsernames,
  insertUsername,
};
