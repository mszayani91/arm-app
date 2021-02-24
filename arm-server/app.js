let express = require('express'),

const app = express();

// PORT
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('PORT Connected on: ' + port)
})
