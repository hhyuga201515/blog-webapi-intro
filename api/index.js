
const express = require("express");
const bodyParser = require("body-parser");
const nano = require("nano")("http://db:5984");

const PORT = 80;
const BASE_URL = "http://localhost:" + PORT;
const BASE_PATH = "/api";

let api = express();
api.use(bodyParser.urlencoded({extended: true}));

let server = api.listen(PORT, () => 
{
	console.log(BASE_URL + BASE_PATH);
});

const db = nano.db.use("hellocouchdb");

api.get(BASE_PATH + "/hello", (req, res, next) =>
{
	let jsonArray = [];

	db.list({include_docs: true}, (err, body) =>
	{
		body.rows.forEach((doc) => jsonArray.push(doc.doc));
		res.json(jsonArray);
	});
});

api.post(BASE_PATH + "/hello", (req, res, next) =>
{
	let reqJsonData = JSON.parse(req.body.data);
	
	db.insert(reqJsonData, (body) =>
	{
		res.json({message: "ok"});
	});
});