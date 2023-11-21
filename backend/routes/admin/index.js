const express = require("express");
const route = express.Router();
const multer = require("../../middlewares/multer");

// Register router : /camping/api/admin/register
// route.post("/register", require("./register"));

// Login router : /camping/api/admin/login
// route.post("/login", require("./login"));

// Get events : /camping/api/admin/events
// route.get("/events", require("./getEvents"));
// add event : /camping/api/admin/events
// route.post("/addEvent/:id", multer.single("photo"), require("./addEvent"));
// Update event : /camping/api/ admin/event
// route.put("/updateEvent", require("./updateEvent"));
// Update event photo : /camping/api/ admin/event
// route.put(
//     "/updateEventImage",
//     multer.single("photo"),
//     require("./updateEventImage")
// );
// Get users : /camping/api/admin/users
//  route.get("/users", require("./getUsers"));

//  get single user : /camping/api/admin/singleUser
// route.get("/singleUser", require("./getSingleUser"));

// Delete event : /camping/api/admin/deleteEvent
// route.delete("/deleteEvent", require("./deleteEvent"));

// event closed : /camping/api/admin/eventClosed
// route.put("/eventClosed" , require("./eventClosed"));

// event postponed :/camping/api/admin/eventPostponed 
// route.put("/eventPostponed" , require("./eventPostponed"));

// event cancelled :/camping/api/admin/eventCancelled
// route.put ("/eventCancelled" , require("./eventCancelled"));

module.exports = route;
