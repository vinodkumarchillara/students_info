var userService = require('./userService');

var getDataControllerfn = async (req, res) => {
  try {
    var employees = await userService.getDataFromDBService();
    res.send({ status: true, data: employees });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send({ status: false, message: "Error retrieving data" });
  }
};

var createUserControllerfn = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    var status = await userService.createUserDBService(req.body);

    console.log("Operation Status:", status);

    if (status) {
      res.send({ status: true, message: "User created successfully!" });
    } else {
      res.send({ status: false, message: "User creation failed!" });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send({ status: false, message: "Error creating user" });
  }
};


var updateUserController = async (req, res) => {
  console.log(req.params.id);  // Use req.params.id for route parameters
  console.log(req.body);       // Logs the body of the request

  try {
    // Await the result from the service function
    var result = await userService.updateUserDBService(req.params.id, req.body);

    if (result) {
      res.send({ status: true, message: "User updated successfully!" });
    } else {
      res.send({ status: false, message: "User update failed!" });
    }
  } catch (error) {
    // Handle any errors from the update service
    console.error("Error updating user:", error);
    res.status(500).send({ status: false, message: "Internal server error!" });
  }
};

var deleteUserController = async(req,res) =>{
  console.log(req.params.id);


  try {
    // Await the result from the service function
    var result = await userService.removeOneUserDBService(req.params.id);

    if (result) {
      res.send({ status: true, message: "User deletion successfully!" });
    } else {
      res.send({ status: false, message: "User deletion failed!" });
    }
  } catch (error) {
    // Handle any errors from the update service
    console.error("Error deletion user:", error);
    res.status(500).send({ status: false, message: "Internal server error!" });
  }
  

}



module.exports = { getDataControllerfn, createUserControllerfn ,updateUserController,deleteUserController};
