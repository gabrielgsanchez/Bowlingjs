class Bowling {
    constructor() {
        this.players = [];
    }

    // Aggiunge un nuovo giocatore con un nome e una lista vuota di punteggi
    addPlayer(name) {
        this.players.push({ name, scores: [] });
    }

    // Genera 10 punteggi casuali per ogni giocatore
    generateScores() {
        this.players.forEach(player => {
            player.scores = Array.from({ length: 10 }, () => Math.floor(Math.random() * (10 - 1 + 1) + 1));
        });
    }

    // Calcola il punteggio totale per ogni giocatore
    getFinalScores() {
        return this.players.map(player => ({
            name: player.name,
            totalScore: player.scores.reduce((acc, score) => acc + score, 0)
        })).sort((a, b) => b.totalScore - a.totalScore); // Ordinamento decrescente
    }

    // Determina il vincitore
    getWinner() {
        const sortedScores = this.getFinalScores();
        return sortedScores.length > 0 ? sortedScores[0] : null;
    }
}

// Esempio di utilizzo:
const game = new Bowling();
game.addPlayer("Marco");
game.addPlayer("Luca");
game.addPlayer("Giulia");

game.generateScores();
console.log("Punteggi finali:", game.getFinalScores());
console.log("Vincitore:", game.getWinner());
