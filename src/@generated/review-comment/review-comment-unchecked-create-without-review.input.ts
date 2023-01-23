import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewCommentMoodUncheckedCreateNestedManyWithoutReviewCommentInput } from '../review-comment-mood/review-comment-mood-unchecked-create-nested-many-without-review-comment.input';

@InputType()
export class ReviewCommentUncheckedCreateWithoutReviewInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    content!: string;

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

    @Field(() => ReviewCommentMoodUncheckedCreateNestedManyWithoutReviewCommentInput, {nullable:true})
    reviewCommentMoods?: ReviewCommentMoodUncheckedCreateNestedManyWithoutReviewCommentInput;
}
