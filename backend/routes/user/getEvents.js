const Blog = require("/../models/Event");

module.exports = async (req, res) => {
    try {
        const data = await Blog.find()
            .populate("user", "userName imgUrl")
            .populate("likes", "userName");
        res.status(200).json({ status: true, data });
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};
