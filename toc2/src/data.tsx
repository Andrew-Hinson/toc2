export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
}

export const recipesData: Recipe[] = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];


export interface ProgramType {
    id: number;
    name: string;
    installed: boolean;
}

export const programData: ProgramType[] = [{
    id: 0,
    name:'discord',
    installed: true,
 }, {
    id: 1,
    name: 'brave', 
    installed: false
 }, {
    id: 2,
    name: 'ghostty', 
    installed: true
 } , {
    id: 3,
    name: 'goland', 
    installed: true
 } , {
    id: 4,
    name: 'vscode', 
    installed: false
 } , {
    id: 5,
    name: 'bitwarden', 
    installed: true
 }]