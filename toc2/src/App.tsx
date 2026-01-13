import { Profile , Card, Item, List} from './Boxes'
import { getImage } from './Utils';
import './App.css'

export default function App() {
  return (
    <Card>
      <h1>Notable Scientists </h1>
      <h2>Cool Checkmark function</h2>
        <Item
          isTrue={false}
          name={'Pack a suit'}
        />
        <Item
          isTrue={true}
          name={'Bring Sunscreen'}
        />
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
      <List></List>

    </Card>
  );
}

