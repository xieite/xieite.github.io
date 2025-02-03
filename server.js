import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { join, parse } from 'node:path';

createServer((req, res) =>
	createReadStream(join('./', (req.url == '/') ? 'index.html' : (req.url + (parse(req.url).ext ? '' : '.html'))))
		.on('open', function() { this.pipe(res); })
		.on('error', () => res.writeHead(404).end())
).listen(8080);
