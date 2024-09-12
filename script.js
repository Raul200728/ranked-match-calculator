// Função para calcular o desempenho
function calculatePerformance(wins, defeats) {
    return wins - defeats;
}

// Função para determinar o nível com base no desempenho
function determineLevel(performance) {
    if (performance < 10) {
        return "Ferro";
    } else if (performance >= 10 && performance < 20) {
        return "Bronze";
    } else if (performance >= 20 && performance < 50) {
        return "Prata";
    } else if (performance >= 50 && performance < 80) {
        return "Ouro";
    } else if (performance >= 80 && performance < 90) {
        return "Diamante";
    } else if (performance >= 90 && performance < 100) {
        return "Lendário";
    } else {
        return "Nível desconhecido";
    }
}

// Definindo variáveis
let nameCharacter = "Caio_93";
let wins = 100;
let defeats = 20;

// Calculando o desempenho e determinando o nível
let performance = calculatePerformance(wins, defeats);
let level = determineLevel(performance);

// Exibindo a mensagem de saída no console
console.log("O Heroi", nameCharacter, "tem saldo de", performance, "e está no nível de", level);