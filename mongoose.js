const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        validate(value) {
            if( value < 0 ) {
                throw new Error('Age must a positive number')
            } 
        }
    }
})

// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })

// const task = new Task({
//     description: 'task1',
//     completed: true
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })

const user = new User({
    name: 'Sam',
    age: -1
})

user.save().then(() => {
    console.log(user)
}).catch((error) => {
    console.log(error)
})