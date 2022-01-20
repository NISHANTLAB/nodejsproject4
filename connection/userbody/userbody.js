// const Myuser= require("../model/model");

// //create and save new users
// exports.create = (req, res) => {
//  // validate request
//  if (!req.body) {
//     res.status(400).send({ message: "Content can not be emtpy!" });
//     return;
// }

//  // new user
//  const user = new Myuser({
//     name: req.body.name,
//     email: req.body.email,
//     gender: req.body.gender,
//     phoneNumber: req.body.status
// });

// // save user in the database:
// user
//     .save(user)
//     .then(data => {
//         res.send(data)
        
//     })
//     .catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while creating a create operation"
//         });
//     });


// };