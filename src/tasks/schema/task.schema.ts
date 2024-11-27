import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema(
    {
        actividad: {type:String, required:true},
        descripcion: {type:String, required:true},
    }, 
    { timestamps:true },
);

 