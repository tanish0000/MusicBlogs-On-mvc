const user = require('../../app_api/model/Userdb')
module.exports.sign = function (req, res) {
  res.render('signup', { title: 'signup' });
};


module.exports.register = async (req,res) => {
  console.log(req.body);
  try{
  
      const {
          username,
          email,
          password,
      } = req.body;
      
      const newUser = new user({
          username,
          email,
          password: password,
      });
      const savedUser  = await newUser.save();
      res.status(201).json(savedUser);
  } catch (err) {
      res.status(500).json({error: err.message});
  }
}