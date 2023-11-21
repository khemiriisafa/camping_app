const Blog = require("/../models/user");

module.exports = async (req, res) => {
    try {
        let { id } = req.query;
        const data = await User.findById(id)
            .populate( "userName imgUrl")
            .populate("likes", "userName");
        res.status(200).json({ status: true, data });
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};
