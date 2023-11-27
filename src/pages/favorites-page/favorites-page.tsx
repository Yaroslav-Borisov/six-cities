import { Helmet } from "react-helmet-async"
import { Offer } from "../../types/offer";
import FavoritesList from "../../components/favorites-list/favorites-list";

type FavoritesPageProps = {
    offers: Offer[];
}

function FavoritesPage({ offers }: FavoritesPageProps): JSX.Element {
    return (
        <div className="page__favorites-container container">
            <section className="favorites">
                <Helmet>
                    <title>6 cities. Сохранённое</title>
                </Helmet>
                <h1 className="favorites__title">Saved listing</h1>
                <FavoritesList offers={offers}/>
            </section >
        </div >
    )
}

export default FavoritesPage