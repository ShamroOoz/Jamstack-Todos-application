import { tabel, formatRecords } from "./utils";

export default async (req, res) => {
  try {
    const records = await tabel.select({}).firstPage();
    res.statusCode = 200;
    res.json(formatRecords(records));
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.json({ errormsg: "Something went wrong" });
  }
};
