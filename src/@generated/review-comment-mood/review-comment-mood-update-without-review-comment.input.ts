import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PlaceUpdateOneWithoutReviewCommentMoodsNestedInput } from '../place/place-update-one-without-review-comment-moods-nested.input';
import { ReviewUpdateOneWithoutReviewCommentMoodNestedInput } from '../review/review-update-one-without-review-comment-mood-nested.input';
import { UserUpdateOneWithoutReviewCommentMoodsNestedInput } from '../user/user-update-one-without-review-comment-moods-nested.input';

@InputType()
export class ReviewCommentMoodUpdateWithoutReviewCommentInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    status?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PlaceUpdateOneWithoutReviewCommentMoodsNestedInput, {nullable:true})
    place?: PlaceUpdateOneWithoutReviewCommentMoodsNestedInput;

    @Field(() => ReviewUpdateOneWithoutReviewCommentMoodNestedInput, {nullable:true})
    review?: ReviewUpdateOneWithoutReviewCommentMoodNestedInput;

    @Field(() => UserUpdateOneWithoutReviewCommentMoodsNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutReviewCommentMoodsNestedInput;
}
