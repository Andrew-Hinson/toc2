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

export function Profile({
  src,
  name,
  profession,
  discovery,
  imageSize
}: ProfileProps) {
  return (
    <section className="profile">
      <img
        className="avatar"
        src={src}
        alt={name}
        width={imageSize}
        height={imageSize}
        />
        <ul>
          <li><b>Profession:</b> {profession}</li>
          <li>
            <b>Discovered: </b>
            {discovery}
          </li>
        </ul>
    </section>
  );
}

export function getImage(name:string){
    return `/src/assets/${name}.png`
}