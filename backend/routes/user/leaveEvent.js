const event = require("../../models/event");

module.exports = async (req, res) => {
    try {
        let { id, eventId } = req.query;
        const userLeaved = await Blog.findOneAndUpdate(
            { _id: eventId },
            {
                $pop: { users: id },
            },
            { new: true }
        );
        res.status(200).json({ status: true, data: userLeaved });
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};
