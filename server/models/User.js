import mongoose from "mongoose";


const Schema = mongoose.Schema;

const userSchema = new Schema({
    matr:{
        type:String,
        required:false
    },
    nom:{
        type:String,
        required:false
    },
    prenom:{
        type:String,
        required:false
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    fonction:{
        type:String
    },
    date_n:{
        type:String
    },
    date_emb:{
        type:String
    },
    adresse:{
        type:String
    }
},{
    timestamps:true
})

export default mongoose.model("user" , userSchema);