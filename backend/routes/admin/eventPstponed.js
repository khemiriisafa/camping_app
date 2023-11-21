const User = require("../../models/User");

module.exports = async (req, res) => {
    try {
        let { eventId } = req.query;
        const eventPostponed = await User.findByIdAndUpdate(
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
            .json({ status: true, data: "Event was postponed successfully" });
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};
