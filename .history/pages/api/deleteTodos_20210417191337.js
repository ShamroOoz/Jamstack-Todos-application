import { tabel, formatRecords } from "./utils/Airtable";

export default async (req, res) => {
  if (req.method !== "DELETE") {
    res.statusCode = 500;
    return res.json({ errormsg: "Something went wrong" });
  }
  const { id } = req.body;
  console.log(req.body);
  // try {
  //   const records = await tabel.destroy([id]);
  //   if (!records) {
  //     res.statusCode = 500;
  //     return res.json({ errormsg: "Something went wrong" });
  //   }
  //   res.statusCode = 200;
  //   res.json({ status: true, successmsg: "Deleted Succcessfully...." });
  // } catch (error) {
  //   console.error(error);
  //   res.statusCode = 500;
  //   return res.json({ errormsg: "Something went wrong" });
  // }
};
