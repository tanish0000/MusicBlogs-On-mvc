var sendJsonResponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};
const mongoose = require('mongoose');
const User = mongoose.model('login');


module.exports.userCreate = function (req, res) {
  const userData = req.body;
  const newUser = new User(userData);

  // Save the new user to the database
  newUser.save()
    .then((user) => {
      // User created successfully
      sendJsonResponse(res, 201, { "status": "success", "user": user });
    })
    .catch((err) => {
      // Handle errors, e.g., duplicate user, validation errors, etc.
      sendJsonResponse(res, 400, { "status": "error", "message": err.message });
    });
};

// Assuming you have a sendJsonResponse function defined elsewhere
function sendJsonResponse(res, status, data) {
  res.status(status);
  res.json(data);
}

module.exports.userReadOne = async function (req, res) {
  try {
    const location = await
      User.findById(req.params.signid).exec();
    sendJsonResponse(res, 200, location);
    console.log(location)
  } catch (err) {
    // Handle the error
    sendJsonResponse(res, 500, { error: 'An error occurred' });
  }

};
module.exports.userUpdateOne = function (req, res) {
  sendJsonResponse(res, 200, { "status": "success" });
};

module.exports.userDeleteOne = async function (req, res) {
  const locationId = req.params.signid;
  try {
    // Find the location by ID and remove it
    const location = await User.findByIdAndRemove(locationId).exec();
    console.log(locationId)

    if (!location) {
      // If the location is not found, return a 404 response
      sendJsonResponse(res, 404, { error: 'Location not found' });
      return;
    }

    // If the location was successfully deleted, return a success response
    sendJsonResponse(res, 200, { 'status': "success" })



  }
  catch (err) {
    // Handle the error
    sendJsonResponse(res, 500, { error: 'An error occurred' });
  }
};



