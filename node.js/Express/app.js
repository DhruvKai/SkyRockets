const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanatize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const viewRouter = require('./routes/viewRoutes');

const app = express();
//define view engine
app.set('view engine', 'pug');
//view setting
app.set('views', path.join(__dirname, 'views'));
//middleware global
//Serving static files
app.use(express.static(path.join(__dirname, 'public')));
//security HTTP headers
app.use(helmet());

//devlopment loging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
//set limits
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this IP, please try in an hour!',
});
app.use('/api', limiter);
//body parser, reading  data from body to req.body
app.use(express.json({ limit: '10kb' }));
//cookie parser
app.use(cookieParser());

//data sanatization against NOSQL query injection
app.use(mongoSanatize());
// data sanatization against XSS
app.use(xss());
//parameter pollution
app.use(
  hpp({
    whitelist: [
      'durations',
      'ratingQuanity',
      'ratingAverage',
      'maxGroupSize',
      'diffficuty',
      'price',
    ],
  })
);

// test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.cookies);
  next();
});

//refactoring code

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

//routes.
app.use('/', viewRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);

//if the controls comes to this point in code it means that it is invalid url and we have to handle it here
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
