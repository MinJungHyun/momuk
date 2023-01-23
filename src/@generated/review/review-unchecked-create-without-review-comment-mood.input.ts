import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ReviewCommentUncheckedCreateNestedManyWithoutReviewInput } from '../review-comment/review-comment-unchecked-create-nested-many-without-review.input';
import { ReviewMoodUncheckedCreateNestedManyWithoutReviewInput } from '../review-mood/review-mood-unchecked-create-nested-many-without-review.input';

@InputType()
export class ReviewUncheckedCreateWithoutReviewCommentMoodInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Float, {nullable:false})
    point!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:true})
    placeId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => ReviewCommentUncheckedCreateNestedManyWithoutReviewInput, {nullable:true})
    reviewComments?: ReviewCommentUncheckedCreateNestedManyWithoutReviewInput;

    @Field(() => ReviewMoodUncheckedCreateNestedManyWithoutReviewInput, {nullable:true})
    reviewMoods?: ReviewMoodUncheckedCreateNestedManyWithoutReviewInput;
}