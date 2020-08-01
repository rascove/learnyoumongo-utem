var mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://localhost:27017", (err, client) =>
{
	var parrots = client.db("learnyoumongo").collection("parrots");

	parrots.find({age: {$gt: parseInt(process.argv[2])}}, {projection: {_id: 0}}).toArray((err, elements) => console.log(elements));
	client.close();
});