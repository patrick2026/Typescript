import './styles.css';

export type CardPatrick = {
  name: string;
  time: string;
}

export function Card(props: CardPatrick) {
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}