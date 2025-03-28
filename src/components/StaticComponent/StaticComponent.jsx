const StaticComponent = () => {

    const items = ["Manzana", "Plátano", "Melón"];

    return (
        <div>
            <h3>Manejo de datos</h3>
            <ul>
                {
                    items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default StaticComponent;