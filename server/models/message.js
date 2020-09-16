const { db } = require("../db/dbConfig");
const { promisify } = require("util");

db.query[promisify.custom] = (sql, values) => {
  return new Promise((resolve, reject) => {
    db.query(sql, values, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve({ results, fields });
      }
    });
  });
};

const promisifiedQuery = promisify(db.query);

exports.insertMessageModel = ({
  first_name,
  last_name,
  email,
  phone,
  address,
  message_text,
}) => {
  let sqlString =
    "INSERT INTO message (message_first_name, message_last_name, message_email, message_phone, message_address, message_text) VALUES (?,?,?,?,?,?)";
  let inputData = [first_name, last_name, email, phone, address, message_text];
  return promisifiedQuery(sqlString, inputData);
};

exports.selectAllMessagesModel = (res) => {
  let sqlString = "SELECT * FROM message";
  db.query(sqlString, (err, results, fields) => {
    if (err) {
      return res.status(400).send({ msg: "Bad request" });
    }
    console.log({ results });
    return res.status(200).json({ results });
  });
};
