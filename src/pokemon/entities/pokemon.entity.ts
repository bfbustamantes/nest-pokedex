import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'

@Schema()
export class Pokemon extends Document {
    
    @Prop({
        unique: true,
        index: true,
    })
    name: string;

    @Prop({
        unique: true,
        index: true,
    })
    no:number;
}

//crea la tabla o documento a partir de la clase, le dice el esquema que tiene que llevar
export const PokemonSchema = SchemaFactory.createForClass( Pokemon );