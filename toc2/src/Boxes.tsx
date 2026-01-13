import  { type ReactNode} from 'react';


type CardProps = {children?: ReactNode}
export function Card({children}: CardProps) {
    return (
        <div className="card">
            {children}
        </div>
    );
}


type ProfileProps = {
    src: string
    name: string
    profession: string
    discovery?: string
    imageSize?: number
}

export function Profile(props: ProfileProps) {
  return (
    <section className="profile">
      <img
        className="avatar"
        src={props.src}
        alt={props.name}
        width={props.imageSize}
        height={props.imageSize}
        />
        <ul>
          <li><b>Profession:</b> {props.profession}</li>
          <li>
            <b>Discovered: </b>
            {props.discovery}
          </li>
        </ul>
    </section>
  );
}

type ItemProps = {
    name: string
    isTrue: boolean
}

// if is true, render name + ✅, otherwise, render name.
export function Item({name, isTrue}: ItemProps){
    return (
    <li className='item'>
        {isTrue ? name + '✅' : name}
    </li>
    );
}



export function getImage(name:string){
    return `/src/assets/${name}.png`
}

const programs = [{
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

export function List(){
    const installedPrograms = programs.filter(program => 
        program.installed == true);
    const listPrograms = installedPrograms.map(program =>
        <li key={program.id}>{program.name}</li>
    );
 return <ul>{listPrograms}</ul>
}
