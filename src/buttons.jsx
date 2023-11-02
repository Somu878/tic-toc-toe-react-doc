export default function Board({ value }) {
  return (
    <>
      <div className="board-row">
        <button className="square">{value}</button>
        <button className="square">{value}</button>
        <button className="square">{value}</button>
      </div>
      <div className="board-row">
        <button className="square">{value}</button>
        <button className="square">{value}</button>
        <button className="square">{value}</button>
      </div>
      <div className="board-row">
        <button className="square">{value}</button>
        <button className="square">{value}</button>
        <button className="square">{value}</button>
      </div>
    </>
  );
}
