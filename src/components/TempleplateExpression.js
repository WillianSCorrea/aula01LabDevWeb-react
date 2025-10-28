const TempleteExpression = () => {
    const name = "PEssoa Amada do React";
    const data = {
        age: 30,
        city: "React City"
    };
    return (
        <div>
            <h2>Hello, {name}!</h2>
            <p>Age: {data.age}</p>
            <p>City: {data.city}</p>
        </div>
    );
}
export default TempleteExpression;