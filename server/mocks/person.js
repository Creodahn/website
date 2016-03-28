/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var bodyParser = require('body-parser');
  var nedb = require('nedb');
  var personRouter = express.Router();
  var personDB = new nedb({ filename: 'person', autoload: true });

  app.use(bodyParser.json());

  personRouter.get('/', function(req, res) {
    res.send({
      'person': []
    });
  });

  personRouter.post('/', function(req, res) {
    personDB.find({}).sort({id: -1}).limit(1).exec(function(err, person) {
      if(person.length !== 0) {
        req.body.person.id = person[0].id + 1;
      } else {
        req.body.person.id = 1;
      }
    });

    personDB.insert(req.body.person, function(err, newPerson) {
      res.status(201).end();
      res.send(
        JSON.stringify({
          person: newPerson
        }));
    });
  });

  personRouter.get('/', function(req, res) {
    console.log(personDB);
    personDB.find({}, function(err, people) {
      console.log(people);
      res.send(
        JSON.stringify({
        'person': people
      }));
    });
  });

  personRouter.get('/:id', function(req, res) {
    console.log(req.params);
    personDB.findOne({ id: req.params.id }, function(err, person) {
      console.log(person);
      res.send(JSON.stringify({
        'person': person
      }));
    });
  });

  personRouter.put('/:id', function(req, res) {
  });

  personRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/person', require('body-parser').json());
  app.use('/api/people', personRouter);
};
