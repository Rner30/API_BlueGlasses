import {Schema,model} from 'mongoose'


const ProductShema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    price:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required:true
    },
    category:{
        type: String,
        required: true
    },
    image:{
        type: String
    }
})

const Product = model('Product',ProductShema)

export default Product