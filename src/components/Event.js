const Event = () => {
    const handleClick = () => {
        alert('Botão clicado!');
    }
    return (
        <div>
            <button onClick={handleClick}>Clique aqui</button>
        </div>
    );
}   
export default Event;