import { cityNames } from "../../const";
import { Offer } from "../../types/offer";
import FavoritesItem from "../favorites-item/favorites-item";

type FavoritesListProps = {
    offers: Offer[];
}

function FavoritesList({ offers }: FavoritesListProps): JSX.Element {
    
    return (
        <ul className="favorites__list">
            {cityNames.map((cityName, index) => (
                <FavoritesItem offers={offers} cityName={cityName} key={index} />
            ))}
        </ul>
    )
}

export default FavoritesList