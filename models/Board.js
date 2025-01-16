const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
});

// Check if the model is already defined, or define it if not
export default mongoose.models.Board || mongoose.model("Board", boardSchema);


