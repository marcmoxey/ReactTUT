
function Food() {

    // dont need {} outside of return statement when using javascript
    const food1 = "Orange";
    const food2 = "Banana";
    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
            <li>Pizza</li>
            <li>Chicken</li>
        </ul>
    );
}

export default Food;