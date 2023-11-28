import { ChangeEvent } from 'react'

type FormReviewInputProps = {
  value: string,
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void,
}

function FormReviewInput({value, onChange}: FormReviewInputProps): JSX.Element {
    return (<>
        <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={value}
            onChange={onChange}
            id={`${value}-stars`}
            type="radio"
        />
        <label
            htmlFor={`${value}-stars`}
            className="reviews__rating-label form__rating-label"
            title="perfect"
        >
            <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
            </svg>
        </label>
    </>)
}

export default FormReviewInput