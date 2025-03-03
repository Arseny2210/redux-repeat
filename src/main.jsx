import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store/store.js'

const StoreContext = React.createContext({ store })
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<StoreContext.Provider store value=''>
			<App />
		</StoreContext.Provider>
	</StrictMode>
)
