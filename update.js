var mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://localhost:27017", (err, client) =>
{
	var docs = client.db(process.argv[2]).collection("users");

	docs.update({username: "tinatime"}, {$set: {age: 40}});
	client.close();
});