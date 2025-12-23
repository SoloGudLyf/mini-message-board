import pool from "./pool.js";

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages;");
  return rows;
}

async function insertMessage(author, username, date) {
  await pool.query(
    "INSERT INTO messages (author,message,time_added) VALUES ($1,$2,$3);",
    [author, username, date]
  );
}

async function getEntity(id) {
  const entity = await pool.query("SELECT * from messages WHERE id=$1;", [
    id,
  ]);
  return entity;
}

async function dropTable() {
  await pool.query("DELETE FROM messages;");
}

export { getAllMessages, insertMessage, getEntity, dropTable };
