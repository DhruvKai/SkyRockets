const { fail } = require('assert');
const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json()); //middleware

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
});

app.get('/api/v1/tours/:id', (req, res) => {
  //id is a variable defined we have to pass value of id in url, If we don't speicfy it, there will be an error. If it is given like :id/y? y is optional because of ?
  console.log(req.params); //readong the parameter from url
  const id = req.params.id * 1; //converting id to number
  const tour = tours.find(el => el.id === id);

  // if (id > tours.length) {
  //   //checking if the tour no is not valid
  //   return res.status(404).json({
  //     status: 'fail',
  //     message: 'invalid id',
  //   });
  // }
  //other way of checking if the tour no is not valid
  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'invalid id',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
});

app.post('/api/v1/tours', (req, res) => {
  //   console.log(req.body);

  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    err => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
});

app.patch('/api/v1/tours/:id', (req, res) => {
  if (req.params.id * 1 > tours.length) {
    //checking if the tour no is not valid
    return res.status(404).json({
      status: 'fail',
      message: 'invalid id',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<updated tour>', //sample place holder for updated response
    },
  });
});

app.delete('/api/v1/tours/:id', (req, res) => {
  if (req.params.id * 1 > tours.length) {
    //checking if the tour no is not valid
    return res.status(404).json({
      status: 'fail',
      message: 'invalid id',
    });
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
