const Airtable = require("airtable");
const base = new Airtable({ apiKey: "keyBtzmQ8mO8s6bb3" }).base(
  "appjlw0LN2Hrx1Vzq"
);
const tabel = base("todos");

export default async (req, res) => {
  try {
    const records = await tabel.select({}).firstPage();
    res.statusCode = 200;
    res.json(records);
  } catch (error) {
    console.error(error);
  }
};
