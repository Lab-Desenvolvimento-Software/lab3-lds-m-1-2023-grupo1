const mongoose = require("mongoose")
const { Schema } = mongoose;

const carteiraSchema = new Schema(
    {
        saldo: {
            type: Number,
            required: true
        },
        operacao: [{

            codigoOperacao:{
                type: String,
                required: true
            },
            descricao:{
                type: String,
                required: true
            },
            tipo: {
                type: Schema.Types.String,
                required: true
            },
            origem:{
                type: Schema.Types.ObjectId,
                ref: 'Pessoa',
                required: true
            },
            destino:{
                type: Schema.Types.ObjectId,
                ref: 'Pessoa',
                required: true
            },
            valor:{
                type: Number,
                required: true
            },
            data: {
                type: Date,
                require: true
            }
        }]
        
    },
    { timestemps: true }
)

const Carteira = mongoose.model("Carteira", carteiraSchema)

module.exports = {
    Carteira,
    carteiraSchema
}