import { AppRoute } from "../../const"

function NotFoundPage(): JSX.Element {
    return (
        <div className="not-found-page__wrapper">
            <div className="not-found-page">
                <h1 className="not-found-page__header">Такой страницы не существует :(</h1>
                <a href={AppRoute.Main}>Вернуться на главную</a>
            </div>
        </div>
    )
}

export default NotFoundPage