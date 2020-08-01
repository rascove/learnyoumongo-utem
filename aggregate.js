var mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://localhost:27017", (err, client) =>
{
	var prices = client.db("learnyoumongo").collection("prices");

	prices.aggregate([{$match: {size: process.argv[2]}}, {$group: {_id: "average", average: {$avg: "$price"}}}]).toArray((err, result) => console.log(Number(result[0].average).toFixed(2)));
	client.close();
});