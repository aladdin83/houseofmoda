/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Location = require('../api/location/location.model');
var Item = require('../api/item/item.model');
var Message = require('../api/message/message.model');

Thing.find({}).removeAsync()
  .then(function () {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Karma, ' +
      'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
      'Stylus, Sass, CoffeeScript, and Less.'
    }, {
        name: 'Server and Client integration',
        info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
        'AngularJS, and Node.'
      }, {
        name: 'Smart Build System',
        info: 'Build system ignores `spec` files, allowing you to keep ' +
        'tests alongside code. Automatic injection of scripts and ' +
        'styles into your index.html'
      }, {
        name: 'Modular Structure',
        info: 'Best practice client and server structures allow for more ' +
        'code reusability and maximum scalability'
      }, {
        name: 'Optimized Build',
        info: 'Build process packs up your templates as a single JavaScript ' +
        'payload, minifies your scripts/css/images, and rewrites asset ' +
        'names for caching.'
      }, {
        name: 'Deployment Ready',
        info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
        'and openshift subgenerators'
      });
  });

User.find({}).removeAsync()
  .then(function () {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    }, {
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@admin.com',
        password: 'admin'
      })
      .then(function () {
        console.log('finished populating users');
      });
  });

Location.find({}).removeAsync()
  .then(function () {
    Location.createAsync(
      {
        id: 1,
        coords: { latitude: 25.3853094, longitude: 55.4757881 },
        city: "Ajman",
        addressLine1: "New Industrial Area - Beirute Street",
        addressLine2: "Sheikhani Group Building - Shop #4",
        phone: "+971 50 203 2278"
      }, {
        id: 2,
        coords: { latitude: 25.2352343, longitude: 55.4360223 },
        city: "Dubai",
        addressLine1: "Khawaneej Road, Al Mizhar 1,opp Mushrif Park",
        addressLine2: "Arabian Centre",
        phone: "+971 4 285 3123"
      }, {
        id: 3,
        coords: { latitude: 25.3328593, longitude: 51.4618077 },
        city: "Doha",
        addressLine1: "Al Markhiya, Al Juthay St",
        addressLine2: "Ezdan Mall - Al Hawdaj Al Malaki Shop",
        phone: "+974 6674 1138"
      }, {
        id: 4,
        coords: { latitude: 33.896316, longitude: 35.477514 },
        city: "Beirute",
        addressLine1: "Hamrah Street - near Plaza Hotel",
        addressLine2: "Al Hawdaj Shop"

      }
      ).then(function () {
        console.log('finished Populating locations');
      })
  });

Item.find({}).removeAsync()
  .then(function () {
    Item.createAsync(
      {
        barcode: 11187,
        sizes: "S / M / L / XL",
        price: 530
      },
      {
        barcode: 11195,
        sizes: "Free Size",
        price: 480
      },
      {
        barcode: 11158,
        sizes: "S / M / L / XL",
        price: 450
      },
      {
        barcode: 11167,
        sizes: "S / M / L / XL",
        price: 550
      },
      {
        barcode: 11161,
        sizes: "S / M / L / XL",
        price: 360
      },
      {
        barcode: 11180,
        sizes: "Free",
        price: 580
      },
      {
        barcode: 11163,
        sizes: "Free",
        price: 375
      },
      {
        barcode: 11146,
        sizes: "Free",
        price: 680
      },
      {
        barcode: 11144,
        sizes: "S / M / L / XL",
        price: 560
      },
      {
        barcode: 11142,
        sizes: "S / M / L / XL",
        price: 530
      },
      {
        barcode: 11135,
        sizes: "S / M / L / XL",
        price: 580
      },
      {
        barcode: 11132,
        sizes: "S / M / L / XL",
        price: 450
      }
      ).then(function () {
        console.log('Finished Populating Items');
      });
  });
  
  Message.find({}).removeAsync()
  .then(function () {
    Message.createAsync(
      {
        name: 'test user 1',
        phone: '+971502032278',
        email: 'test@test.com',
        message: 'message body here'
      }
    )}).then(function(){
      console.log('Finished Populating Messages');
    });