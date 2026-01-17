const Card = ( {nome, categoria, preco, imagem} ) => {
    return (  
        <div>
            <img 
            src={imagem}
            alt="" 
            />
            <div>
            <h3>{nome}</h3>
            <h4>{categoria}</h4>
            <h6>{preco}</h6>
            </div>
        </div>
    );
}
 
export default Card;