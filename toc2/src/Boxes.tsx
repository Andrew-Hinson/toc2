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

export function Item({name, isTrue}: ItemProps){
    if (isTrue) {
        return <li className='item'>{name}✅</li>;
    }
    return <li className='item'>{name}</li>;
}



export function getImage(name:string){
    return `/src/assets/${name}.png`
}