import { tabel, formatRecords } from "./utils/Airtable";

export default async (req, res) => {
  const fileds = req.body;
  try {
    // const records = await tabel.create([{}]);
    // res.statusCode = 200;
    res.json(fileds);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.json({ errormsg: "Something went wrong" });
  }
};
