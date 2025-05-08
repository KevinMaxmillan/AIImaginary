import { Schema, model, models } from "mongoose";


const UserSchema = new Schema ({

    clerlId: {type: String, required:true, unique:true},
    email: {type: String, required:true, unique:true},
    username: {type: String, required:true, unique:true},
    photo:{type: String, required:true},
    firstName: {type: String},
    lastName: {type: String},
    planId:{type: Number, defualt: 1},
    creditBalance: {type: Number,defualt:10}


})

const User = models?.User || model('User', UserSchema) 

export default User