const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pakcode_db",
});

connection.connect();

// connection.query("SELECT 1 + 1 AS solution", (err, rows, fields) => {
//   if (err) throw err;
//   console.log("The solution is: ", rows[0].solution);
// });

// connection.query("SELECT * FROM test", (err, rows, fields) => {
//   if (err) throw err;
//   //   console.log("The solution is: ", rows);
//   let data = [];
//   rows.map((row) => {
//     data.push(row);
//   });
//   console.log("The data array contains this data: ", data);
// });

connection.query("SELECT * FROM category_law", (err, rows, fields) => {
  const data = JSON.parse(JSON.stringify(rows));
  console.log(data);
});
connection.end();
