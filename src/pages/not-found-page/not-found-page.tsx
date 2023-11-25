import { Helmet } from "react-helmet-async"
import { AppRoute } from "../../const"

function NotFoundPage(): JSX.Element {
    return (
        <div className="not-found-page__wrapper">
            <Helmet>
                <title>404 ошибка</title>
            </Helmet>
            <div className="not-found-page">
                <h1 className="not-found-page__header">Такой страницы не существует :(</h1>
                <a href={AppRoute.Main}>Вернуться на главную</a>
            </div>
        </div>
    )
}

export default NotFoundPage