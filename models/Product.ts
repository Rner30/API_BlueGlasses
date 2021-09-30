import {Schema,model} from 'mongoose'

export interface IProduct extends Document{
    name: String;
    description: String;
    price: Number;
    Stock: Number;
    category: String;
    image: String;
}


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

const Product = model<IProduct>('Product',ProductShema)

export default Product