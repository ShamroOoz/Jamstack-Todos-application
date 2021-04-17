const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);
const tabel = base(process.env.AIRTABLE_TABLE_NAME);

const formatRecords = (records) => {
    return records.map((record) => {
        if (!record._rawJson.fields.completed) {
            return
        }
        return record._rawJson;
    }
}
export default async (req, res) => {
  try {
    const records = await tabel.select({}).firstPage();

    res.statusCode = 200;
    res.json(formatRecords(records));
  } catch (error) {
    console.error(error);
  }
};
