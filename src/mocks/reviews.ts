import { Review } from "../types/review";

export const reviews: Review[] = [
    {
        'id': 10,
        'user': {
            'id': 1,
            'name': 'Max',
            'avatar': 'img/avatar-max.jpg',
            'isPro': false
        },
        'rating': 4,
        'text': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        'date': '15 Апреля',
    },
    {
        'id': 20,
        'user': {
            'id': 2,
            'name': 'Angelina',
            'avatar': 'img/avatar-angelina.jpg',
            'isPro': true
        },
        'rating': 5,
        'text': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        'date': '20 Июня',
    },
]