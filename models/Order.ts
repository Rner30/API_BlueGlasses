import {Schema,model} from 'mongoose'

interface IComprador{
    email: String;
    name: String;
    phone: String;
}

interface Iitem{
    cantidad: Number;
    nombre: String;
}

interface IItems{
    cantidad: Number;
    item: Array<Iitem>
}
export interface IOrder extends Document{
    comprador:Array<IComprador>;
    items: Array<IItems>
    total : Number
}

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
            },
            precio:{
                type: Number
            }
        }  
    },
    total:{
        type:Number
    }
})
const Order = model<IOrder>('Order',OrderSchema)

export default Order


