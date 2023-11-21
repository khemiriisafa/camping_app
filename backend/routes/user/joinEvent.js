const event = require("../../models/event");

module.exports = async (req, res) => {
    try {
        let { id, eventId } = req.query;
        const userJoined = await Blog.findOneAndUpdate(
            { _id: eventId },
            {
                $push: { users: id },
            },
            { new: true }
        );
        res.status(200).json({ status: true, data: userJoined });
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};
