const Card = ({title, description}) => {
    return (
        <section>
            <h2>{title}</h2>
            <img src="https://via.placeholder.com/150" alt="placeholder" />            
            <p>{description}</p>
        </section>        
    );
 };

 export default Card;