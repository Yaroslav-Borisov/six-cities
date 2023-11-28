import { Link, generatePath } from "react-router-dom";
import { AppRoute } from "../../const";
import { Offer } from "../../types/offer";

type PlaceCardProps = {
    offer: Offer;
    parentClass: string;
    onOfferMouseOver?: (id: number) => void,
    onOfferMouseLeave?: () => void,
}

function PlaceCard({ offer, parentClass, onOfferMouseOver, onOfferMouseLeave }: PlaceCardProps): JSX.Element {
    const { id, images, title, rating, type, price, isFavorite } = offer

    return (
        <article
            className={`${parentClass}__card place-card`}
            onMouseOver={() => onOfferMouseOver?.(id)}
            onMouseLeave={() => onOfferMouseLeave?.()}
        >
            <div className={`${parentClass}__image-wrapper place-card__image-wrapper`}>
                <Link to={generatePath(AppRoute.Offer, { id: `${id}` })}>
                    <img
                        className="place-card__image"
                        src={images[id]}
                        width="260"
                        height="200"
                        alt="Place image"
                    />
                </Link>
            </div>
            <div className="place-card__info">
                <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                        <b className="place-card__price-value">&euro;{price}</b>
                        <span className="place-card__price-text">
                            &#47;&nbsp;night
                        </span>
                    </div>
                    <button
                        className={isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'} type="button"
                    >
                        <svg
                            className="place-card__bookmark-icon"
                            width="18"
                            height="19"
                        >
                            <use xlinkHref="#icon-bookmark"></use>
                        </svg>
                        <span className="visually-hidden">In bookmarks</span>
                    </button>
                </div>
                <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                        <span style={{ width: `${rating * 100 / 5}%` }}></span>
                        <span className="visually-hidden">Rating</span>
                    </div>
                </div>
                <h2 className="place-card__name">
                    <Link to={generatePath(AppRoute.Offer, { id: `${id}` })}>
                        {title}
                    </Link>
                </h2>
                <p className="place-card__type">{type}</p>
            </div>
        </article>
    )
}

export default PlaceCard