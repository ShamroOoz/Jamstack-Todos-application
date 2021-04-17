const Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyBtzmQ8mO8s6bb3" }).base(
  "appjlw0LN2Hrx1Vzq"
);

export default (req, res) => {
  let todos = [];
  base("todos")
    .select({
      view: "Grid view",
    })
    .firstPage((err, records) => {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach((record) => {
        todos.push(record);
      });
    });

  res.statusCode = 200;
  res.json(todos);
};
