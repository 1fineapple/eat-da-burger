// Set up MySQL connection.

var mysql = require ("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user:"root",
  password: "12345678",
  database:"burger_db"

});localStorage

connection.connect(function(err){
if (err) {
  console.error("error connection:" +err.stack);
  return;
}
  console.log("connected as id " +connection.threadId);

});

module.exports= connection;


