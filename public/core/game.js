
const { BehaviorSubject } = rxjs;

class Game {
    static area = document.querySelector('#game').getBoundingClientRect();
    static element = document.getElementById('game');
    static currentGame = new BehaviorSubject(undefined);
    static socket = new BehaviorSubject(undefined);
    
    platforms = new BehaviorSubject([]);
    players = new BehaviorSubject([]);
    decorations = new BehaviorSubject([]);
 
    addDecorations(decoration) {
        this.decorations.next([
            ...this.decorations.value,
            ...decoration
        ]);
    }

    addPlayers(players) {
        this.players.next([
            ...this.players.value,
            ...players
        ]);
    }

    addPlatforms(platforms) {
        this.platforms.next([
            ...this.platforms.value,
            ...platforms
        ]);
    }

    run() {
        // return
        Game.currentGame.next(this);
        this.players.subscribe((players) => {
            for (const player of players) {
                player.update();
            }
        })
        this.platforms.subscribe((platforms) => {
            for (const platform of platforms) {
                platform.draw();
            }
        })
        requestAnimationFrame(this.run.bind(this));
    }    
}
