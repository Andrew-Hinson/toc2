import { Profile , Card, Item} from './Components'
import  {getImage}  from './utils';
import './App.css'
import { programData, recipesData } from './Data';

export function Section1() {
  return (
    <Card>
      <h1>React Practice</h1>
      <h2>Section 1 </h2>
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
    </Card>
  );
}

export function Section2() {
  return (
    <Card>
      <h2>Section 2</h2>
      {recipesData.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      )}
    </Card>
      
  );
}

export function Section3(){
  return (
    <Card>
      <h2>Section 3</h2>
      {programData
      .filter(program => program.installed)
      .map(program => (
        <div key= {program.id}>
          <Item
          key = {program.id}
          isTrue = {program.installed}
          name = {program.name}
          />
        </div>
        ))}
    </Card>
  )
}