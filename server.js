const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3001;
const path = require('path');

require('dotenv').config();
require('./config/database');

const postRouter = require('./routes/posts')
const userRouter = require('./routes/users');
const cors = require('cors')


app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/api/posts', postRouter)
app.use('/api/users', userRouter);


app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port, ()=> {
    console.log(`Express is listening on port ${port}.`)
});