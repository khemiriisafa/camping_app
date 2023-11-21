const User = require("../../models/event");

module.exports = async (req, res) => {
    try {
        let { eventId } = req.query;
        const eventClosed = await User.findByIdAndUpdate(
            eventId,
            {
                $set: {
                    isClosed: true,
                },
            },
            { new: true }
        );
        res
            .status(200)
            .json({ status: true, data: "Event was closed successfully" });
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};
