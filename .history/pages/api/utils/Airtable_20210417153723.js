import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

const tabel = base(process.env.AIRTABLE_TABLE_NAME);

const formatRecords = (records) => {
  return records.map((record) => {
    if (!record._rawJson.fields.completed) {
      record._rawJson.fields.completed = false;
    }
    return record._rawJson;
  });
};

export { tabel, formatRecords };
