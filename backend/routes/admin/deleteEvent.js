const Event = require("/../models/Event");

module.exports = async (req, res) => {
    try {
        let { eventId } = req.query;
        const newEvent = await Event.findByIdAndDelete(eventgId);
        res
            .status(200)
            .json({ status: true, message: "Event has been deleted successfully" });
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};
