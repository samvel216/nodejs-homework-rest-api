const {Schema, model} = require("mongoose");

const userSchema = Schema({
   name: {
    type: String
   },
    password: {
        type: String,
        required: [true, 'Set password for user'],
      },
      email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
      },
      avatarURL: {
       type: String,
      },
      // },
      // subscription: {
      //   type: String,
      //   enum: ["starter", "pro", "business"],
      //   default: "starter"
      // },
      // token: String
});

const User = model("user", userSchema);

module.exports = {
    User
};