import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PlaceCreateNestedOneWithoutReviewsInput } from '../place/place-create-nested-one-without-reviews.input';
import { UserCreateNestedOneWithoutReviewsInput } from '../user/user-create-nested-one-without-reviews.input';
import { ReviewMoodCreateNestedManyWithoutReviewInput } from '../review-mood/review-mood-create-nested-many-without-review.input';
import { ReviewCommentMoodCreateNestedManyWithoutReviewInput } from '../review-comment-mood/review-comment-mood-create-nested-many-without-review.input';

@InputType()
export class ReviewCreateWithoutReviewCommentsInput {

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

    @Field(() => PlaceCreateNestedOneWithoutReviewsInput, {nullable:true})
    place?: PlaceCreateNestedOneWithoutReviewsInput;

    @Field(() => UserCreateNestedOneWithoutReviewsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutReviewsInput;

    @Field(() => ReviewMoodCreateNestedManyWithoutReviewInput, {nullable:true})
    reviewMoods?: ReviewMoodCreateNestedManyWithoutReviewInput;

    @Field(() => ReviewCommentMoodCreateNestedManyWithoutReviewInput, {nullable:true})
    ReviewCommentMood?: ReviewCommentMoodCreateNestedManyWithoutReviewInput;
}
