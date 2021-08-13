import express from 'express';
import path from 'path';
import routes  from 'ruta\routes.js';

const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
    console.log( 'Server up en puerto', puerto)
);

const publicPath = path.resolve(__dirname, '../public');
app.use(expres.static(publicPath));

app.set('view engine', 'ejs');
const viewsPath = path.resolve(__dirname, '../views');
app.set('views', 'ejs', viewsPath);

app.use("ruta\routes.js", routes  );

app.get("/", (req, res) => {
    res.sendFile(__dirname + "public\mihtml2.html");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

server.on('error', (err) => {
    console.log('ERROR ATAJADO', err);
})