import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_KEY
);
export function addRecord(email, name, message, checkboxes) {
  let topic = [];

  topic = checkboxes
    .map((item) => (item.checked ? item.name : ""))
    .filter((item) => !!item);
  console.log(name, email, message, topic);
  base("appointment").create(
    [
      {
        fields: {
          Name: name,
          Email: email,
          Nachricht: message,
          Topic: topic,
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }
  );
}

export function addNewsletterRecord(email, name) {
  base("newsletter").create(
    [
      {
        fields: {
          email: email,
          name: name,
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }
  );
}

export const getMinifiedRecords = (records) => {
  return records.map((record) => getMinifiedRecord(record));
};

export const contactTable = base("contact");

export async function addContactRecord(name, email, message) {
  await base("contact").create(
    [
      {
        fields: {
          name: name,
          email: email,
          message: message,
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }
  );
}
