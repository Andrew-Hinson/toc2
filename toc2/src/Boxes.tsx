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
    name: string
    profession: string
    discovery?: string
    imageSize?: number
}

export function Profile({
  name,
  profession,
  discovery,
  imageSize = 70
}: ProfileProps) {
  return (
    <section className="profile">
      <h1>{name}</h1>
      <img
        className="avatar"
        src="tbd"
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