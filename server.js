const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const homeRoutes = require('./routes/home');
const servicesRoutes = require('./routes/services');
const contactRoutes = require('./routes/contact');

app.use('/', homeRoutes);
app.use('/services', servicesRoutes);
app.use('/contact', contactRoutes);
app.set('view engine', 'ejs');


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
