import Buttons from './pages/Buttons'
import Alerts from './pages/Alerts'
import Badges from './pages/Badges'
import Cards from './pages/Cards'
import Modal from './components/modal/Modal'

function App() {
	return (
		<>
			<Modal />
			<Cards />
			<Badges />
			<Alerts />
			<Buttons />
		</>
	)
}
export default App
