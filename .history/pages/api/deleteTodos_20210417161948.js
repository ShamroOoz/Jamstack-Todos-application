import { tabel, formatRecords } from "./utils/Airtable";

export default async (req, res) => {
  console.log(req);
  try {
    // const records = await tabel.destroy([id]);
    // const deleteRecords = formatRecords(records);
    // res.statusCode = 200;
    // res.json(deleteRecords[0]);
  } catch (error) {
    console.error(error);
  }
};
