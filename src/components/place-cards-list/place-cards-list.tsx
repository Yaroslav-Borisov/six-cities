import { Offer } from "../../types/offer";
import PlaceCard from "../place-card/place-card";

type PlacesListProps = {
    offers: Offer[];
    parentClass: string;
}

function PlacesList({ offers, parentClass }: PlacesListProps): JSX.Element {

    return (<>
        {offers.map((offer, index) => (

            <PlaceCard offer={offer} parentClass={parentClass} key={index}/>

        ))}
    </>
    )
}

export default PlacesList