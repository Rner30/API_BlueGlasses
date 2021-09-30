import {Schema,model} from 'mongoose'


const OrderSchema = new Schema({
    comprador:{
        type: Array,
        email:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        phone:{
            type: String,
            required: true
        }
    },
    items:{
        type: Array,
        cantidad:{
            type: Number,
            required: true
        },
        item:{
            type: Array,
            required: true,
            cantidad:{
                type: Number,
                required:true
            },
            nombre:{
                type: String,
                required: true
            }
        }  
    },
    total:{
        type:Number
    }
})
const Order = model('Order',OrderSchema)

export default Order


