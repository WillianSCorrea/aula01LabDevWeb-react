const Challenge = () => {
    const Valores = {
        Valor01: 30,
        Valor02: 50
    };
    return (
        <div>
            <h2>Desafio do Componente Challenge</h2>
            <p>Este é um componente de desafio simples em React.</p>
            <p>Valor 01: {Valores.Valor01}</p>
            <p>Valor 02: {Valores.Valor02}</p>
            <button onClick={() => console.log(`A soma é: ${Valores.Valor01 + Valores.Valor02}`)}>Calcular Soma</button>
        </div>
    );
}