import mongoose from "mongoose";


export const dbConnection = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_DB}`)
        console.log("DB ONLINE")
    } catch (error) {
        console.log(error)
    }
}
