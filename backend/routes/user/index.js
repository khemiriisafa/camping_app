const express = require("express");
const route = express.Router();
const multer = require("../../middlewares/multer");

// Register router : /event/api/register
// route.post("/register", require("./register"));

// Login router : /event/api/login
// route.post("/login", require("./login"));

// Get all the events : /event/api/events
// route.get("/events", require("./getEvents"));

// Update user event : /event/api/updateUserEvent
// route.put("/updateUserEvent", require("./updateUserEvent"));

// Get event: /event/api/singleEvent
// route.get("/Event", require("./getEvent"));

// join event :/event/api/joinEvent
// route.put("event", require("./joinEvent"));

// leave event :/event/api/leaveEvent
// route.put("event", require("./leaveEvent"));

// User update user image: /blog/api/updateUserImage
// route.put(
//     "/updateUserImage",
//     multer.single("photo"),
//     require("./updateUserImage")
// );

module.exports = route;
