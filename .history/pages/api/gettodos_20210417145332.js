const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
