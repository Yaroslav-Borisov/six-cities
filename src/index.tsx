import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/app'
import { Setting } from './const'
import { offers } from './mocks/offers'
import { user } from './mocks/user'
import { reviews } from './mocks/reviews'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <App 
      placesCount = { Setting.PlacesCount }
      user = { user }
      offers = { offers } 
      reviews = { reviews }
    />
  </React.StrictMode>
)
