const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: [true, "This is a required field, please insert a username"],
        },
        phone: {
            type: String,
            minlength: [8, "Number must containr 8 digits"],
            required: [true, "This is a required field, please insert a username"],
        },
        email: {
            type: String,
            required: [true, "This is a required field, please insert an email"],
            match: [
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                "This is invalid email, please check it again",
            ],
        },
        password: {
            type: String,
            required: [true, "This is a required field, please insert a password"],
            match: [
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+|~-]).{8,}$/,
                `Your password must contain 8 characters with at least one uppercase character, one lowercase character and one special character (!@#$%^&*()_+|~-)`,
            ],
        },


        isUser: {
            type: Boolean,
            default: true,
        },
        imgUrl: {
            type: "string",
            default: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = User = mongoose.model("User", userSchema);
