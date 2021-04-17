const Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyBtzmQ8mO8s6bb3" }).base(
  "appjlw0LN2Hrx1Vzq"
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
