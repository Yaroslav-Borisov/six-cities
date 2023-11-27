import { Helmet } from "react-helmet-async"
import { Offer } from "../../types/offer";
import { User } from "../../types/user";
import { Review } from "../../types/review";
import PlacesList from "../../components/place-cards-list/place-cards-list";

type OfferPageProps = {
    user: User;
    offers: Offer[];
    reviews: Review[];
}



function OfferPage({ user, offers, reviews }: OfferPageProps): JSX.Element {
    const { images, isPremium, isFavorite, title, rating, type, bedrooms, maxAdults, price, goods, host, description } = offers[0]
    const { email } = user


    return (
        <div className="page">
            <Helmet>
                <title>6 cities. Оффер</title>
            </Helmet>
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__left">
                            <a className="header__logo-link" href="main.html">
                                <img
                                    className="header__logo"
                                    src="img/logo.svg"
                                    alt="6 cities logo"
                                    width="81"
                                    height="41"
                                />
                            </a>
                        </div>
                        <nav className="header__nav">
                            <ul className="header__nav-list">
                                <li className="header__nav-item user">
                                    <a
                                        className="header__nav-link header__nav-link--profile"
                                        href="#"
                                    >
                                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                                        <span className="header__user-name user__name">
                                            {email}
                                        </span>
                                        <span className="header__favorite-count">3</span>
                                    </a>
                                </li>
                                <li className="header__nav-item">
                                    <a className="header__nav-link" href="#">
                                        <span className="header__signout">Sign out</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="page__main page__main--offer">
                <section className="offer">
                    <div className="offer__gallery-container container">
                        <div className="offer__gallery">
                            {images.map((imageSrc, index) => {
                                return (
                                    <div className="offer__image-wrapper" key={index}>
                                        <img
                                            className="offer__image"
                                            src={imageSrc}
                                            alt="Photo studio"
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="offer__container container">
                        <div className="offer__wrapper">
                            <div className="offer__mark">
                                {isPremium ? <span>Premium</span> : <span>Not Premium</span>}
                            </div>
                            <div className="offer__name-wrapper">
                                <h1 className="offer__name">
                                    {title}
                                </h1>
                                <button className={isFavorite ? 'offer__bookmark-button--active offer__bookmark-button button' : 'offer__bookmark-button button'} type="button">
                                    <svg className="offer__bookmark-icon" width="31" height="33">
                                        <use xlinkHref="#icon-bookmark"></use>
                                    </svg>
                                    <span className="visually-hidden">To bookmarks</span>
                                </button>
                            </div>
                            <div className="offer__rating rating">
                                <div className="offer__stars rating__stars">
                                    <span style={{ width: '80%' }}></span>
                                    <span className="visually-hidden">Rating</span>
                                </div>
                                <span className="offer__rating-value rating__value">{rating}</span>
                            </div>
                            <ul className="offer__features">
                                <li className="offer__feature offer__feature--entire">
                                    {type}
                                </li>
                                <li className="offer__feature offer__feature--bedrooms">
                                    {bedrooms} Bedrooms
                                </li>
                                <li className="offer__feature offer__feature--adults">
                                    Max {maxAdults} adults
                                </li>
                            </ul>
                            <div className="offer__price">
                                <b className="offer__price-value">&euro;{price}</b>
                                <span className="offer__price-text">&nbsp;night</span>
                            </div>
                            <div className="offer__inside">
                                <h2 className="offer__inside-title">What&apos;s inside</h2>
                                <ul className="offer__inside-list">
                                    {goods.map((good, index) => {
                                        return (
                                            <li className="offer__inside-item" key={index}>{good}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="offer__host">
                                <h2 className="offer__host-title">Meet the host</h2>
                                <div className="offer__host-user user">
                                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                                        <img
                                            className="offer__avatar user__avatar"
                                            src={host.avatarUrl}
                                            width="74"
                                            height="74"
                                            alt="Host avatar"
                                        />
                                    </div>
                                    <span className="offer__user-name">{host.name}</span>
                                    {host.isPro ? <span className="offer__user-status">Pro</span> : ''}
                                </div>
                                <div className="offer__description">
                                    <p className="offer__text">
                                        {description}
                                    </p>
                                    <p className="offer__text">
                                        {description}
                                    </p>
                                </div>
                            </div>
                            <section className="offer__reviews reviews">
                                <h2 className="reviews__title">
                                    Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
                                </h2>
                                <ul className="reviews__list">

                                    {reviews.map((review, index) => {
                                        return (
                                            <li className="reviews__item" key={index}>
                                                <div className="reviews__user user">
                                                    <div className="reviews__avatar-wrapper user__avatar-wrapper">
                                                        <img
                                                            className="reviews__avatar user__avatar"
                                                            src={review.user.avatar}
                                                            width="54"
                                                            height="54"
                                                            alt="Reviews avatar"
                                                        />
                                                    </div>
                                                    <span className="reviews__user-name">Max</span>
                                                </div>
                                                <div className="reviews__info">
                                                    <div className="reviews__rating rating">
                                                        <div className="reviews__stars rating__stars">
                                                            <span style={{ width: `${review.rating * 100 / 5}%` }}></span>
                                                            <span className="visually-hidden">Rating</span>
                                                        </div>
                                                    </div>
                                                    <p className="reviews__text">{review.text}</p>
                                                    <time className="reviews__time" dateTime="2019-04-24">
                                                        {review.date}
                                                    </time>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <form className="reviews__form form" action="#" method="post">
                                    <label
                                        className="reviews__label form__label"
                                        htmlFor="review"
                                    >
                                        Your review
                                    </label>
                                    <div className="reviews__rating-form form__rating">
                                        <input
                                            className="form__rating-input visually-hidden"
                                            name="rating"
                                            value="5"
                                            id="5-stars"
                                            type="radio"
                                        />
                                        <label
                                            htmlFor="5-stars"
                                            className="reviews__rating-label form__rating-label"
                                            title="perfect"
                                        >
                                            <svg className="form__star-image" width="37" height="33">
                                                <use xlinkHref="#icon-star"></use>
                                            </svg>
                                        </label>

                                        <input
                                            className="form__rating-input visually-hidden"
                                            name="rating"
                                            value="4"
                                            id="4-stars"
                                            type="radio"
                                        />
                                        <label
                                            htmlFor="4-stars"
                                            className="reviews__rating-label form__rating-label"
                                            title="good"
                                        >
                                            <svg className="form__star-image" width="37" height="33">
                                                <use xlinkHref="#icon-star"></use>
                                            </svg>
                                        </label>

                                        <input
                                            className="form__rating-input visually-hidden"
                                            name="rating"
                                            value="3"
                                            id="3-stars"
                                            type="radio"
                                        />
                                        <label
                                            htmlFor="3-stars"
                                            className="reviews__rating-label form__rating-label"
                                            title="not bad"
                                        >
                                            <svg className="form__star-image" width="37" height="33">
                                                <use xlinkHref="#icon-star"></use>
                                            </svg>
                                        </label>

                                        <input
                                            className="form__rating-input visually-hidden"
                                            name="rating"
                                            value="2"
                                            id="2-stars"
                                            type="radio"
                                        />
                                        <label
                                            htmlFor="2-stars"
                                            className="reviews__rating-label form__rating-label"
                                            title="badly"
                                        >
                                            <svg className="form__star-image" width="37" height="33">
                                                <use xlinkHref="#icon-star"></use>
                                            </svg>
                                        </label>

                                        <input
                                            className="form__rating-input visually-hidden"
                                            name="rating"
                                            value="1"
                                            id="1-star"
                                            type="radio"
                                        />
                                        <label
                                            htmlFor="1-star"
                                            className="reviews__rating-label form__rating-label"
                                            title="terribly"
                                        >
                                            <svg className="form__star-image" width="37" height="33">
                                                <use xlinkHref="#icon-star"></use>
                                            </svg>
                                        </label>
                                    </div>
                                    <textarea
                                        className="reviews__textarea form__textarea"
                                        id="review"
                                        name="review"
                                        placeholder="Tell how was your stay, what you like and what can be improved"
                                    >
                                    </textarea>
                                    <div className="reviews__button-wrapper">
                                        <p className="reviews__help">
                                            To submit review please make sure to set{' '}
                                            <span className="reviews__star">rating</span> and describe
                                            your stay with at least{' '}
                                            <b className="reviews__text-amount">50 characters</b>.
                                        </p>
                                        <button
                                            className="reviews__submit form__submit button"
                                            type="submit"
                                            disabled
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                    <section className="offer__map map"></section>
                </section>
                <div className="container">
                    <section className="near-places places">
                        <h2 className="near-places__title">
                            Other places in the neighbourhood
                        </h2>
                        <div className="near-places__list places__list">
                            <PlacesList offers={offers.slice(1, offers.length)} parentClass={'near-places'}/>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default OfferPage