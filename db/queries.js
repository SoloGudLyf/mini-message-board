import pool from "./pool.js";

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertUsername(author, username, date) {
  await pool.query(
    "INSERT INTO messages (author,message,time_added) VALUES ($1,$2,$3)",
    [author, username, date]
  );
}

async function getEntity(author) {
  const entity = await pool.query("SELECT * from messages WHERE author=$1",[author])
  return entity
}

export { getAllUsernames, insertUsername,getEntity };
