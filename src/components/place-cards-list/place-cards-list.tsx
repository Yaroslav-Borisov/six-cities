import { useState } from "react";
import { Offer } from "../../types/offer";
import PlaceCard from "../place-card/place-card";

type PlacesListProps = {
    offers: Offer[];
    parentClass: string;
}

function PlacesList({ offers, parentClass }: PlacesListProps): JSX.Element {
    const [, setActiveOfferId] = useState(0)

    const handleOfferMouseOver = (id: number) => setActiveOfferId(id)
    const handleOfferMouseLeave = () => setActiveOfferId(0)

    return (<>
        {offers.map((offer) => (
            <PlaceCard
                key={offer.id}
                offer={offer}
                parentClass={parentClass}
                onOfferMouseOver={handleOfferMouseOver}
                onOfferMouseLeave={handleOfferMouseLeave}
             />
        ))}
    </>
    )
}

export default PlacesList