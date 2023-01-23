import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PlaceMoodSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    status?: number;

    @Field(() => Int, {nullable:true})
    placeId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;
}
