import  { type ReactNode} from 'react';



type CardProps = {children?: ReactNode}
export function Card({children}: CardProps) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

function Person({name, profession, awards, discovered}){
    return (
        <div className="subcard">
            <Avatar
                name={name}
                profession={profession}
                awards={awards}
                discovered={discovered}
            />
        </div>
    )
}

export function Profile({
  name,
  profession,
  awards,
  discovery,
  imageSize = 70
}) {
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
            <b>Awards: {awards.length} </b>
            ({awards.join(', ')})
          </li>
          <li>
            <b>Discovered: </b>
            {discovery}
          </li>
        </ul>
    </section>
  );
}