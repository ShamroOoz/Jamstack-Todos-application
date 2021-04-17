const Airtable = require("airtable");
const base = new Airtable({ apiKey: "keyBtzmQ8mO8s6bb3" }).base(
  process.env.AIRTABLE_BASE_ID
);
const tabel = base(process.env.AIRTABLE_TABLE_NAME);

export default async (req, res) => {
  try {
    const records = await tabel.select({}).firstPage();
    res.statusCode = 200;
    res.json(records);
  } catch (error) {
    console.error(error);
  }
};
