import { tabel, formatRecords } from "./utils/Airtable";

export default async (req, res) => {
  const { id, fields } = req.body;
  try {
    // const records = await tabel.update([{ id, fields }]);
    // res.statusCode = 200;
    // res.json(formatRecords(records));
    res.json({ id, fields });
  } catch (error) {
    console.error(error);
  }
};
