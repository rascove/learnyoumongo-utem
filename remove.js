var mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://localhost:27017", (err, client) =>
{
	var db = client.db(process.argv[2]).collection(process.argv[3]);

	db.remove({_id: process.argv[4]});
	client.close();
});