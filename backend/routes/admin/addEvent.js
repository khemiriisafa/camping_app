const Blog = require("/../models/evnt");
const fs = require("fs");
const path = require("path");
const Binary = require("mongoose").Binary
module.exports = async (req, res) => {
    try {
        let { title, imgUrl, desc, place, date, price, isClosed , isCancelled ,isPostponed  } = req.body;
        let { id } = req.params;
        const imgBuffer = fs.readFileSync(
            path.join(
                "D:/Dévelopement WEB/GOMYCODE Coaching/Full Stack/BLOG-APP/BACKEND/",
                "uploads",
                req.file.filename
            )
        );
        const base64Image = await imgBuffer.toString("base64");
        const newEvent= new event({
            title,
            place,
            desc,
            imgUrl: base64Image,
            price,
            isClosed,
            isCancelled,
            isPostponed
        });
        await newEvent.save();
        res.status(200).json({ status: true, message: "Your event was added successfully" });
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};
