const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//middleware
app.use(express.json());

app.use(morgan('dev'));

app.use((req, res, next) => {
  console.log('Hello from the middleware👋');
  next();
});

// app.use((req, res, next) => {
//   req.requestTime = new Data().toISOString();
//   next();
// });

//refactoring code

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

//refactoring more. routes.

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
