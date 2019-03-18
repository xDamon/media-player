const url = require("url");
const path = require("path");
const electron = require("electron");
const reload = require("electron-reload");

const { app, BrowserWindow } = electron;
const isDevMode = Boolean(Number(process.env.DEV_MODE));

if (isDevMode) {
	reload(__dirname);
}

let win;

function createWindow () {
	win = new BrowserWindow({
		width: 600,
		height: 450,
		minWidth: 600,
		minHeight: 450,
		maxWidth: 600,
		maxHeight: 450,
		frame: false,
		backgroundColor: "#0a1218"
	});

	if (isDevMode) {
		win.loadURL("http://localhost:1234");
	} else {
		win.loadURL(url.format({
			protocol: "file",
			slashes: true,
			pathname: path.join(__dirname, "..", "..", "build", "index.html")
		}));
	}

	win.webContents.openDevTools();
	win.setMenu(null);

	win.on("closed", () => {
		win = null;
	});
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (win === null) {
		createWindow();
	}
});
