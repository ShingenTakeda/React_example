import MeuBotao from "./Botao";

function BtnGroup(){
    const arr = []

    for(let i = 0; i < 15; i++){
        arr.push(<MeuBotao></MeuBotao>)
    }

    return(
        <div>
            {arr}
        </div>
    )
}

export default BtnGroup