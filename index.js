const express = require('express');
const multer = require('multer');
const path = require('path')

const app = express();

app.set('view engine', 'ejs');

const upload = multer({storage});

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "uploads/");
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname + Date.now() + path.extname(file.originalname));
    }
});

app.get("/", (req, res) => {
    res.render('index');
});


app.post('/upload', upload.single("arquivos") ,(req, res) => {
    res.send('arquivo salvo');
});

app.listen(4001, () => {
    console.log('server up');
});
