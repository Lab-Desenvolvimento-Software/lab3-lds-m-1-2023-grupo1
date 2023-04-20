const mongoose = require("mongoose")
const { Schema } = mongoose;

const alunoSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        senha: {
            type: String,
            required: true
        },
        cpf:{
            type:String,
            require: true
        },
        rg:{
            type: String,
            require: true,
        },
        curso:{
            type: String,
            require: true
        },
        endereco:{
            cep:{
                type: Number,
                require: true
            },
            numero:{
                type: Number,
                require: true
            }
        },
        carteira: {
            type: Schema.Types.ObjectId,
            ref: 'Carteira'
        }
    },
    { timestemps: true }
)

const Aluno = mongoose.model("Aluno", alunoSchema)

module.exports = {
    Aluno,
    alunoSchema
}