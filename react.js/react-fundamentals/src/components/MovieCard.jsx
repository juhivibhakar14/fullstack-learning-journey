function MovieCard(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.rating}</p>
      <p>{props.year}</p>
    </>
  );
}

export default MovieCard;