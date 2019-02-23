
const assert = require("assert");
const deepcopy = require("deepcopy");
const http = require("http");
require("date-utils");
const date = new Date();

const PORT = 80;
const BASE_URL = "http://localhost:" + PORT;
const BASE_PATH = "/api";

let postOptions = {
	host: "localhost",
	port: PORT,
	path: BASE_PATH,
	method: "POST",
	headers: {
		"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
	}
};

describe("hello", () =>
{
	// POST
	it("post(/api/hello)", (done) =>
	{
		let options = deepcopy(postOptions);
		options.path += "/hello";

		let postJsonData = {
			message: "Hello CouchDB!",
			date: date.toFormat("YYYY/MM/DD HH24時MI分SS秒")
		};

		let postData = encodeURI("data=" + JSON.stringify(postJsonData));
		
		let req = http.request(options, (res) =>
		{
			let body = "";
			
			res.on("data", (chunk) => body += chunk);
			res.on("end", () =>
			{
				assert.deepEqual(JSON.parse(body), {message: "ok"});
				done();
			});
		});
		
		// send
		req.setHeader("Content-Length", postData.length);
		req.on("error", (error) => assert.fail(error));
		req.write(postData);
		req.end();
	});

	// GET
	it("get(/api/hello)", (done) =>
	{
		let req = http.get(BASE_URL + BASE_PATH + "/hello", (res) =>
		{
			assert.deepEqual(res.statusCode, 200);
			done();
		});
		
		req.on("error", (error) => assert.fail(error));
		req.end();
	});
});