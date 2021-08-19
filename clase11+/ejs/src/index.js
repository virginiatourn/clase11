import express from 'express';
import path from 'path';
import routesproduct from './ruta/routesproduct';


const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
    console.log( 'Server up en puerto', puerto)
);

app.use(express.json());

const publicFolderPath = path.resolve(__dirname, '../public');
app.use(express.static(publicFolderPath));

app.set('view engine', 'ejs');
const viewsPath = path.resolve(__dirname, '../views');
app.set('views', 'ejs', viewsPath);

app.use('/api/productos', routesproduct);

app.get('/', (req, res) => {
  res.sendFile(__dirname + './public/html.html');
});

server.on('error', (err) => {
    console.log('ERROR ATAJADO', err);
})