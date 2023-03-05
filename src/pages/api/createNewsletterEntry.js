import { addNewsletterRecord } from "@lib/airtable";

const createNewsletterEntry = async (req, res) => {
  if (req.method === "POST") {
    //find a record

    const { email } = req.body;

    try {
      if (email) {
        //create a record

        addNewsletterRecord(email);

        res.json({
          message: "Succesfully send",
        });
      } else {
        res.status(400);
        res.json({ message: "email is missing" });
      }
    } catch (err) {
      console.error("Error creating a message", err);
      res.status(500);
      res.json({ message: "Error creating a message", err });
    }
  }
};

export default createNewsletterEntry;
