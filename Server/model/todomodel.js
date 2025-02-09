const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    tag: { type: String },
    done: { type: String, default: "no" },
    delete: { type: Boolean, default: false }
});

const createTodoModel = (modelName) => {
    // Check if the model already exists, if so, return it
    return mongoose.models[modelName] || mongoose.model(modelName, TodoSchema,modelName);
};

module.exports = createTodoModel;
