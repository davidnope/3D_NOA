const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3030;

// archivos estaticos - css
app.use(express.static(path.join(__dirname, '../public')))

// ejs
app.set('view engine', 'ejs');
app.set('views', './src/views')

// Rutas
const indexRouter = require(path.join(__dirname, './routers/indexRouter'));
const productsRouter = require(path.join(__dirname, './routers/productsRouter'))

app.use('/', indexRouter);
app.use('/product', productsRouter);

app.listen(port, ()=>{ console.log(`Servidor ${port} funcionando`);})