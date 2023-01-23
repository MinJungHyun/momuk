import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { PlaceUpdateOneWithoutReviewCommentsNestedInput } from '../place/place-update-one-without-review-comments-nested.input';
import { ReviewUpdateOneWithoutReviewCommentsNestedInput } from '../review/review-update-one-without-review-comments-nested.input';
import { UserUpdateOneWithoutReviewCommentsNestedInput } from '../user/user-update-one-without-review-comments-nested.input';

@InputType()
export class ReviewCommentUpdateWithoutReviewCommentMoodsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PlaceUpdateOneWithoutReviewCommentsNestedInput, {nullable:true})
    place?: PlaceUpdateOneWithoutReviewCommentsNestedInput;

    @Field(() => ReviewUpdateOneWithoutReviewCommentsNestedInput, {nullable:true})
    review?: ReviewUpdateOneWithoutReviewCommentsNestedInput;

    @Field(() => UserUpdateOneWithoutReviewCommentsNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutReviewCommentsNestedInput;
}
