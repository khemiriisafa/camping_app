const event = require("../../models/event");

module.exports = async (req, res) => {
    try {
        let { userId } = req.query;
        const newUser = await event.findByIdUpdate(
            userId,
            {
                $set: { ...req.body },
            },
            { new: true }
        );
        res.status(200).json({ status: true, data: newEvent });
    } catch (error) {
        if (error) throw error;
        res.status(401).json({ status: false, error });
    }
};