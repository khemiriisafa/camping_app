const User = require("../../models/event");

module.exports = async (req, res) => {
    try {
        let { eventId } = req.query;
        const eventCancelled = await User.findByIdAndUpdate(
            eventId,
            {
                $set: {
                    isCancelled: true,
                },
            },
            { new: true }
        );
        res
            .status(200)
            .json({ status: true, data: "Event was cancelled successfully" });
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};
