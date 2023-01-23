import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MealType } from '../prisma/meal-type.enum';

@InputType()
export class StampUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => MealType, {nullable:true})
    mealType?: keyof typeof MealType;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:true})
    placeId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;
}
