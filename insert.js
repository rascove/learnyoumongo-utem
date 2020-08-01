var mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://localhost:27017", (err, client) =>
{
	var docs = client.db("learnyoumongo").collection("docs");
	var object = {firstName: process.argv[2], lastName: process.argv[3]};

	docs.insert(object, (error, result) => console.log(JSON.stringify(object)));
	client.close();
});