import { appointmentTable, getMinifiedRecords } from "@lib/airtable";

const createAppointmentEntry = async (req, res) => {
  if (req.method === "POST") {
    //find a record

    const { email, name, message, checkboxes } = req.body;

    try {
      if (email) {
        //create a record
        let topic = checkboxes
          .map((item) => (item.checked ? item.name : ""))
          .filter((item) => !!item);

        const createRecords = await appointmentTable.create([
          {
            fields: {
              Name: name,
              Email: email,
              Nachricht: message,
              Topic: topic,
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
      console.error("Error creating a message", err.message);
      res.status(500);
      res.json({ message: "Error creating a message", err });
    }
  }
};

export default createAppointmentEntry;
