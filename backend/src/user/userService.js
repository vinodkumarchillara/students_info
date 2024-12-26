var userModel = require('./userModel')


module.exports.getDataFromDBService = async () => {
    try {
      const result = await userModel.find({});
      return result; // Resolve the Promise implicitly
    } catch (error) {
      throw false; // Reject the Promise implicitly
    }
  };


  module.exports.createUserDBService = async (userDetails) => {
    try {
      const userModelData = new userModel({
        name: userDetails.name,
        address: userDetails.address,
        phone: userDetails.phone,
      });
  
      await userModelData.save(); // Save returns a Promise
      return true; // Resolve the Promise implicitly
    } catch (error) {
      throw false; // Reject the Promise implicitly
    }
  };

  

  module.exports.updateUserDBService = (id, userDetails) => {
    console.log(userDetails);
    return new Promise(async (resolve, reject) => {
      try {
        const result = await userModel.findByIdAndUpdate(id, userDetails, { new: true });
        resolve(result); // Resolve with the updated document
      } catch (error) {
        console.error("Error updating user:", error);
        reject(error); // Reject with the actual error
      }
    });
  };

  module.exports.removeOneUserDBService = async (id) => {
    try {
      const result = await userModel.findByIdAndDelete(id);
      return result; // Resolve with the deleted document
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error; // Reject with the actual error
    }
  };
  