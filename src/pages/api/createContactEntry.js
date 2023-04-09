import { addContactRecord, getMinifiedRecords } from "@lib/airtable";

const createNewsletterEntry = async (req, res) => {
  if (req.method === "POST") {
    //find a record

    const { name, email, message } = req.body;

    try {
      if (email) {
        //create a record
        console.log(email);
        await addContactRecord(name, email, message);
        const createRecords = await contactTable.create([
          {
            fields: {
              name: name,
              email: email,
              message: message,
            },
          },
        ]);

        const records = getMinifiedRecords(createRecords);

        res.json({
          message: "Succesfully send",
          ...records,
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
