import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PlaceCreateNestedOneWithoutReviewCommentMoodsInput } from '../place/place-create-nested-one-without-review-comment-moods.input';
import { ReviewCommentCreateNestedOneWithoutReviewCommentMoodsInput } from '../review-comment/review-comment-create-nested-one-without-review-comment-moods.input';
import { UserCreateNestedOneWithoutReviewCommentMoodsInput } from '../user/user-create-nested-one-without-review-comment-moods.input';

@InputType()
export class ReviewCommentMoodCreateWithoutReviewInput {

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PlaceCreateNestedOneWithoutReviewCommentMoodsInput, {nullable:true})
    place?: PlaceCreateNestedOneWithoutReviewCommentMoodsInput;

    @Field(() => ReviewCommentCreateNestedOneWithoutReviewCommentMoodsInput, {nullable:true})
    reviewComment?: ReviewCommentCreateNestedOneWithoutReviewCommentMoodsInput;

    @Field(() => UserCreateNestedOneWithoutReviewCommentMoodsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutReviewCommentMoodsInput;
}
