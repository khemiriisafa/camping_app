const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "The title field is required"],
        },
        limiteParticipant: {
            type: Number,
            required: [true, "The title field is required"],
        },

        users: {
            type: [Schema.Types.ObjectId],
            ref: "User",
        },

        imgUrl: {
            type: String,
            required: [true, "The event's body is required"],

        },
        place: {
            type: String,
            required: [true, "The event's place is required"],
        },
        date: {
            type: String,
            required: [true, "The event's date is required"],
        },
        price: {
            type: Number,
            required: [true, "The event's price is required"],
        },
        isClosed: {
            type: Boolean,
            default: false
        },
        isCancelled: {
            type: Boolean,
            default: false
        },
        isPostponed: {
            type: Boolean,
            default: false
        },
        desc: {
            type: String,
            required: [true, "The event's body is required"],
        },

    },
    { timestamps: true }
);

module.exports = Event = mongoose.model("events", eventSchema);
