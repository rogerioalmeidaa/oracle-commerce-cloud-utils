const express = require('express');
const applicationHealth = require('./routes/environment/applicationHealth');
const logger = require('./logger');

const app = new express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/test/', applicationHealth);

app.listen(7071, () => {  
    logger.log('info', `Server running on port 7071`);
});
  
module.exports = app;
