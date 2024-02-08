const mongoose= require('mongoose');
mongoose.connect('mongodb+srv://jairedhawk53777:yoZvmMcRCvRm70Mz@cluster0.1c2ssud.mongodb.net/user_app')

const todoSchema= mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo= mongoose.model('todo', todoSchema);

module.exports= {
    todo
}