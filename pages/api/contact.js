const express = require("express");
const { createContact, getContactsByUserId } = require("../models/contact");

const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, name, email, phone, address, timezone } = req.body;
  try {
    const contact = await createContact(
      userId,
      name,
      email,
      phone,
      address,
      timezone
    );
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).send("Error creating contact.");
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const contacts = await getContactsByUserId(req.params.userId);
    res.json(contacts);
  } catch (error) {
    res.status(500).send("Error retrieving contacts.");
  }
});

module.exports = router;
