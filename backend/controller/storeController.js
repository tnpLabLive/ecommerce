const { v4: uuidv4 } = require("uuid");
let connection = require("../db/config");
const CreateResponse = require("../util/CreateResponse");

const createStore = (req, res) => {
  try {
    const { storename, storeimg } = req.body;
    
    if (req.details.role !== "admin") {
      return CreateResponse(
        res,
        500,
        null,
        "You have not registered with business account",
        false
      );
    }

    const data = {
      id: uuidv4(),
      store_name: storename,
      store_img: storeimg,
      FK_business_id: req.details.business_id
    };
    const query = "INSERT INTO store set ?";

    connection.query(query, data, (err, results) => {
      if (err) {
        return CreateResponse(res, 500, null, err.message, false);
      } else {
        return CreateResponse(res, 200, results, "", true);
      }
    });
  } catch (error) {
    return CreateResponse(res, 200, null, error.message, false);
  }
};

const getAllStore = (req, res) => {
  const query = "SELECT * FROM store";

  connection.query(query, (err, results) => {
    if (err) {
      return CreateResponse(res, 500, null, err.message, false);
    } else {
      return CreateResponse(res, 200, results, "", true);
    }
  });
};

const getStoreAdmin = (req, res) => {
  const business_id  = req.details.business_id;
  const query = "SELECT * FROM store WHERE FK_business_id = ?";
  connection.query(query, business_id , (err, results) => {
    if (err) {
      return CreateResponse(res, 500, null, err.message, false);
    } else {
      return CreateResponse(res, 200, results, "", true);
    }
  });
};

const createStaffForStore = (req, res) => {
  try {
    const { storeid, userid } = req.body;
    const data = {
      id: uuidv4(),
      FK_store_id: storeid,
      FK_user_id: userid,
    };

    const query = "INSERT INTO store_staff set ?";

    connection.query(query, data, (err, results) => {
      if (err) {
        return CreateResponse(res, 500, null, err.message, false);
      } else {
        return CreateResponse(res, 200, results, "", true);
      }
    });
  } catch (error) {
    return CreateResponse(res, 200, null, error.message, false);
  }
};

module.exports = { getAllStore, createStore, getStoreAdmin, createStaffForStore };
