const Bundler = require("parcel-bundler");
const path = require("path");
const app = require("express")();

const file = path.join(__dirname, "./src/renderer/index.html");
const isDevMode = Boolean(Number(process.env.DEV_MODE));

const options = {
	outDir: "./build",
	outFile: "index.html",
	watch: isDevMode,
	cache: true,
	cacheDir: ".cache",
	contentHash: false,
	minify: false,
	scopeHoist: false,
	target: "electron",
	https: false,
	logLevel: 3,
	hmrPort: 0,
	sourceMaps: true,
	hmrHostname: "",
	detailedReport: false
};

const port = 1234;
const bundler = new Bundler(file, options);

if (isDevMode) {
	app.use(bundler.middleware());
	app.listen(port);

	bundler.bundle()
		.then(() => {
			console.log(`√  \u001b[36mServer on http://localhost:${port}\u001b[39m`);
		});
} else {
	bundler.bundle();
}
