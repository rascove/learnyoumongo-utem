var mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://localhost:27017", (err, client) =>
{
	var parrots = client.db("learnyoumongo").collection("parrots");

	parrots.count({age: {$gt: parseInt(process.argv[2])}}, (err, result) => console.log(result));
	client.close();
});