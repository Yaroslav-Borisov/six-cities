import { useState } from "react";
import { Offer } from "../../types/offer";
import FavoritesCard from "../favorites-card/favorites-card";

type FavoritesItemProps = {
    offers: Offer[],
    cityName: string,
}

function FavoritesItem({ offers, cityName }: FavoritesItemProps): JSX.Element {

    const [, setActiveOfferId] = useState(0)

    const handleOfferMouseOver = (id: number) => setActiveOfferId(id)
    const handleOfferMouseLeave = () => setActiveOfferId(0)

    return (

        <>
            {offers.filter((offer) => offer.city.name === cityName && offer.isFavorite === true).length !== 0 ?
                <li className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                            <a className="locations__item-link" href="#">
                                <span>{cityName}</span>
                            </a>
                        </div>
                    </div>
                    <div className="favorites__places">
                        {offers.filter((offer) => offer.city.name === cityName && offer.isFavorite === true).map((offer) => (
                            <FavoritesCard
                                offer={offer}
                                key={offer.id}
                                onOfferMouseOver={handleOfferMouseOver}
                                onOfferMouseLeave={handleOfferMouseLeave}
                            />
                        ))}

                    </div>
                </li> : ''
            }

        </>
    )
}

export default FavoritesItem