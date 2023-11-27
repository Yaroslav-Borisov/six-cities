import { cityNames } from "../../const";
import { Offer } from "../../types/offer";
import FavoritesItem from "../favorites-item/favorites-item";

type FavoritesListProps = {
    offers: Offer[];
}

function FavoritesList({ offers }: FavoritesListProps): JSX.Element {

    return (
        <ul className="favorites__list">
            {cityNames.map((cityName) => (
                <FavoritesItem offers={offers} cityName={cityName} />
            ))}
        </ul>
    )
}

export default FavoritesList