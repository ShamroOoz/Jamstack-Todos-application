import { tabel, formatRecords } from "./utils/Airtable";

export default async (req, res) => {
  if (req.method !== "DELETE") {
    res.statusCode = 500;
    return res.json({ errormsg: "Something went wrong" });
  }
  const { id } = req.body;
  try {
    // const records = await tabel.destroy([id]);
    // const deleteRecords = formatRecords(records);
    // res.statusCode = 200;
    // res.json(deleteRecords[0]);
    res.json(id);
  } catch (error) {
    console.error(error);
  }
};
