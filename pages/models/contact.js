const db = require("../utils/db");

const createContact = async (userId, name, email, phone, address, timezone) => {
  const [result] = await db.execute(
    "INSERT INTO contacts (user_id, name, email, phone, address, timezone) VALUES (?, ?, ?, ?, ?, ?)",
    [userId, name, email, phone, address, timezone]
  );
  return { id: result.insertId, userId, name, email, phone, address, timezone };
};

const getContactsByUserId = async (userId) => {
  const [rows] = await db.execute("SELECT * FROM contacts WHERE user_id = ?", [
    userId,
  ]);
  return rows;
};

module.exports = { createContact, getContactsByUserId };
