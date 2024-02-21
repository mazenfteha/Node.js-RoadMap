const fastify = require('fastify');
const mongoose = require("mongoose")
const User = require('./User');
require('dotenv').config()

const app = fastify()
const MONGO_URI = process.env.MONGO_DB

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log(`Connected successfully to MongoDB`);
    })
    .catch(err => {
        console.log(err.message);
    });

app.get('/', function(request, reply){
    reply.send("Our first route")
})

// users API endpoints :

// Create User
app.post("/api/users", async (request, reply) => {
    try {
        const user = request.body
        await User.create(user)
        reply.send(user)
    } catch (error) {
        reply.status(500).send({ message: "Internal Server Error", error: error })
    }
})

// Get all Users
app.get("/api/users", async (request, reply) => {
    try {
        const users = await User.find()
        if(!users){
            reply.status(200).send({ error: "No users found" })
        }
        reply.send(users)
    } catch (error) {
        reply.status(500).send({ message: "Internal Server Error", error: error })
    }
})

// Get user by his _id
app.get("/api/users/:userId", (request, reply) => {
    var userId = request.params.userId
    User.findById(userId, (err, user) => {
        if (!err) {
            reply.send(user)
        } else {
            reply.send({ error: err })
        }
    })
})
// Update User

app.put("/api/users/:userId", (request, reply) => {
    var userId = request.params.userId
    var newUserEdit = request.body
    User.findById(userId, (err, user) => {
        if (!err) {
            user.age = newUserEdit.age
            user.name = newUserEdit.name
            user.email = newUserEdit.email
            user.save((er, savedUser) => {
                if (!er) {
                    reply.send(savedUser)
                } else {
                    reply.send(er)
                }
            })
        } else {
            reply.send({ error: err })
        }
    })
})

// Delete User 
app.delete("/api/users/:userId", (request, reply) => {
    var userId = request.params.userId
    User.findById(userId, (err, user) => {
        if(!err) {
            user.remove((er) => {
                if(!er) {
                    reply.send("USER DELETED")
                } else {
                    reply.send({ error: er })
                }
            })
        } else {
            reply.send({ error: err })
        }
    })
})


app.listen(4000, function(err, address) {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening on ${address}`)
})