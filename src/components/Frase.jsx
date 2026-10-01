

const Frase = ({frase}) => {
  return (
    <div>
      <img src={`https://cdn.thesimpsonsapi.com/200${frase.portrait_path}`} alt="" />
      <section>
        <h2>{frase.name}</h2>
        <p>{frase.phrases}</p>
      </section>
    </div>
  );
};

export default Frase;
