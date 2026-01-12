import { Profile , Card} from './Boxes'
import './App.css'

export default function App() {
  return (
    <Card>
      <h1>Notable Scientists </h1>
      <Profile
        name="Maria Sklodowska-Curie"
        profession='Physicist and Chemist'
        discovery='polonium (chemical element)'
      />
      <Profile
        name="Katsuko Saruhashi"
        profession='geochemist'
        discovery='Method for measuring carbon dioxide in seawater'
      />

    </Card>
  );
}

