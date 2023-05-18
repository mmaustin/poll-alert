import express from 'express';
const app = express();


app.get('/', (req, res) => {
    res.send('Welcome');
});

const port = 5001;
app.listen(port, () => console.log(`server is listening on port ${port}`));