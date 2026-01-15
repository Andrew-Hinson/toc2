import  { type ReactNode} from 'react';
import { programs } from './Data';

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





export function List(){
    const installedPrograms = programs.filter(program => 
        program.installed == true);
    const listPrograms = installedPrograms.map(program =>
        <li key={program.id}>{program.name}</li>
    );
 return <ul>{listPrograms}</ul>
}


