import { addRecord } from "@lib/airtable";

const createAppointmentEntry = async (req, res) => {
  if (req.method === "POST") {
    //find a record

    const { email, name, message, checkboxes } = req.body;

    try {
      if (email) {
        //create a record

        addRecord(email, name, message, checkboxes);

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

export default createAppointmentEntry;
