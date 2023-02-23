import img from "../img/restauranfood.jpg"
function Chicago() {
    return(
        <>
        <header className="header">
        <div>
            <h1>Little Lemon</h1>
            <h4>Chicago</h4>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <div className="a"><a>Reserve a Table</a></div>
        </div>
        <div>
            <img
                src={img}
                alt="food img"
            />
        </div>
        </header>
        </>
    )
}

export default Chicago;