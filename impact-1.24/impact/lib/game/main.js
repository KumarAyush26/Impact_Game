ig.module(
    'game.main'
)
.requires(
    'impact.game',
    'game.entities.player',
    'game.entities.zombie',
    'game.levels.dorm1'
)
.defines(function(){

MyGame = ig.Game.extend({
    // world gravity
    gravity: 300,

    init: function() {
        // Bind keys (left/right/jump/shoot/switch)
        ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
        ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
        ig.input.bind( ig.KEY.X, 'jump' );
        ig.input.bind( ig.KEY.C, 'shoot' );
        ig.input.bind( ig.KEY.TAB, 'switch' );

        // Load the level made in Weltmeister
        this.loadLevel( LevelDorm1 );
        
        // Spawn player and zombies
        ig.game.spawnEntity( EntityPlayer, 80, 100 );
        ig.game.spawnEntity( EntityZombie, 200, 100 );
        ig.game.spawnEntity( EntityZombie, 280, 100 );
        ig.game.spawnEntity( EntityZombie, 360, 100 );
        ig.game.spawnEntity( EntityZombie, 440, 100 );
        ig.game.spawnEntity( EntityZombie, 520, 100 );
        ig.game.spawnEntity( EntityZombie, 240, 180 );
        ig.game.spawnEntity( EntityZombie, 400, 180 );
        ig.game.spawnEntity( EntityZombie, 560, 180 );
    },

    update: function() {
        this.parent();
        
        // Camera follows player
        var player = ig.game.getEntitiesByType( EntityPlayer )[0];
        if( player ) {
            this.screen.x = player.pos.x - 160 + 4;  // center on player (160 = half of 320 width)
            this.screen.y = player.pos.y - 120 + 7;  // center on player (120 = half of 240 height)
        }
    },

    draw: function() {
        this.parent();
        // additional draw code (UI, debug) can go here
    }
});

// Start the Game with 60fps, resolution 320x240 scaled by 2
ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
