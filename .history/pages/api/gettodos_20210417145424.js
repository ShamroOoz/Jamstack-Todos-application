const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

export default (req, res) => {
  base("todos")
    .select({
      view: "Grid view",
    })
    .firstPage(function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log("Retrieved", record.get("descriptions"));
      });
    });
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
