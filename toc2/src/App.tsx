import { Profile , Card, getImage} from './Boxes'
import './App.css'

export default function App() {
  return (
    <Card>
      <h1>Notable Scientists </h1>
      <Profile
        src= {getImage('puppy1')}
        imageSize={100}
        name="Maria Sklodowska-Curie"
        profession='Physicist and Chemist'
        discovery='polonium (chemical element)'
      />
      <Profile
        src= {getImage('puppy2')}
        name="Katsuko Saruhashi"
        profession='geochemist'
        discovery='Method for measuring carbon dioxide in seawater'
      />

    </Card>
  );
}

