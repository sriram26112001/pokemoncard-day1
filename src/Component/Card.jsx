import '/src/styles/CardStyle.css';
const Card = () => {
    const pokemon ={
        img:"src/Image/pikachu image.jpg",
        name:"Pikachu",
        description: "Cute but powerful — don't underestimate the shock. ⚡",
    };
    return (
        <div className="container">
            <img className="card-img-top" src={pokemon.img} alt="pikachu image" />
            <div className="card-Header">
                <h3 className="card-title">{pokemon.name}</h3>
                <img className="card-icon" src="src/Image/pokeball.png" alt="pokeball icon" />
            </div>
            <p className="card-info">{pokemon.description}</p>
            <div className="card-buttons">
                <button className="Power-Up-Button">Power up</button>
                <button className="Evolve-Button">Evolve</button>
            </div>
        </div>
    )
}
export default Card;