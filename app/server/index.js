const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const port = 3000;

// static 폴더 설정
app.use(express.static(path.join(__dirname, '../client/dist')));
// body-parsor 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { User } = require('./model/user');

app.listen(port, () => {
    mongoose
        .connect('mongodb+srv://chlee:qa12q1@cluster0.nhtjtcg.mongodb.net/AuthStudy?retryWrites=true&w=majority')
        .then(() => {
            console.log(`Example app listening on port ${port}`);
            console.log(`MongoDB Connecting...`);
        })
        .catch((err) => {
            console.log(err);
        });
});

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/dist/index.html'));
// });

app.post('/api/test', (req, res) => {
    console.log(req.body);
    const newUser = new User({ id: req.body.id, pw: req.body.pw });
    newUser.save().then(() => {
        res.status(200).json({ success: true, text: '유저등록성공' });
    });
});

app.post('/api/register', (req, res) => {
    const newUser = new User({ id: req.body.id, pw: req.body.pw });
    newUser.save().then(() => {
        res.status(200).json({ success: true, text: '유저등록성공' });
    });
});

app.post('/api/login', (req, res) => {
    // const newUser = new User({ id: req.body.id, pw: req.body.pw });
    User.find(req.body).then((result) => {
        console.log(result.length);
        if (result.length === 0) {
            res.status(200).json({ success: false, text: '등록된 사용자가 아닙니다' });
        } else {
            res.status(200).json({ success: true, text: '로그인 성공' });
        }
    });
});
