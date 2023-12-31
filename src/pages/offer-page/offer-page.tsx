import { Helmet } from "react-helmet-async"
import { Offer } from "../../types/offer";
import { User } from "../../types/user";
import { Review } from "../../types/review";
import PlacesList from "../../components/place-cards-list/place-cards-list";
import { useParams } from "react-router-dom";
import FormReview from "../../components/form-review/form-review";

type OfferPageProps = {
    user: User;
    offers: Offer[];
    reviews: Review[];
}



function OfferPage({ user, offers, reviews }: OfferPageProps): JSX.Element {
    const params = useParams()
    const offerId = Number(params.id)

    const { email } = user
    const currentOffer = offers.filter((offer) => offer.id === offerId)[0]
    const { images, title, isPremium, rating, price, isFavorite, type, bedrooms, maxAdults, goods, host, description } = currentOffer

    const neighbourhood = offers
        .filter((offer) => offer.city.name === currentOffer.city.name)
        .filter((offer) => offer.id !== currentOffer.id);


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
                                        <span className="header__favorite-count">{offers.filter(offer => offer.isFavorite === true).length}</span>
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
                                    <span style={{ width: `${rating * 100 / 5}%` }}></span>
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
                                <FormReview />
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
                            <PlacesList offers={neighbourhood} parentClass={'near-places'} />
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default OfferPage