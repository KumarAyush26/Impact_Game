ig.module(
    'game.entities.zombie'
)
.requires(
    'impact.entity'
)
.defines(function(){

EntityZombie = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/zombie.png', 16, 16),
    size: { x:8, y:14 },
    offset: { x:4, y:2 },
    maxVel: { x:100, y:100 },
    flip: false,
    
    // health
    health: 20,
    maxHealth: 20,

    friction: { x:150, y:0 },
    speed: 14,

    type: ig.Entity.TYPE.B,
    checkAgainst: ig.Entity.TYPE.A,
    collides: ig.Entity.COLLIDES.PASSIVE,

    init: function(x, y, settings) {
        this.parent(x, y, settings);
        this.addAnim('walk', .07, [0,1,2,3,4,5]);
    },

    update: function() {
        // edge detection: flip if no tile under front
        if( !ig.game.collisionMap.getTile(
            this.pos.x + (this.flip ? +4 : this.size.x - 4),
            this.pos.y + this.size.y + 1
        ) ) {
            this.flip = !this.flip;
        }

        var xdir = this.flip ? -1 : 1;
        this.vel.x = this.speed * xdir;
        this.currentAnim.flip.x = this.flip;
        this.parent();
    },

    handleMovementTrace: function(res) {
        this.parent(res);
        if( res.collision.x ) {
            this.flip = !this.flip;
        }
    },

    check: function(other) {
        other.receiveDamage(10, this);
    },

    receiveDamage: function(amount, from) {
        this.health -= amount;
        if (this.health <= 0) {
            this.kill();
        }
    },

    draw: function() {
        this.parent();

        // draw health bar above zombie
        var ctx = ig.system.context;
        var x = (this.pos.x - ig.game.screen.x) * ig.system.scale;
        var y = (this.pos.y - ig.game.screen.y) * ig.system.scale;
        var w = this.size.x * ig.system.scale;
        var h = 4 * ig.system.scale;

        // background
        ctx.fillStyle = 'rgba(0,0,0,0.6)';
        ctx.fillRect(x, y - 10 * ig.system.scale, w, h);

        // health (red)
        ctx.fillStyle = 'rgba(200,40,40,0.95)';
        var healthWidth = Math.max(0, (w - 2 * ig.system.scale) * (this.health / this.maxHealth));
        ctx.fillRect(x + 1 * ig.system.scale, y - 10 * ig.system.scale + 1 * ig.system.scale, healthWidth, h - 2 * ig.system.scale);

        // label
        ctx.fillStyle = 'white';
        ctx.font = (9 * ig.system.scale) + 'px sans-serif';
        ctx.fillText('Zombie', x, y - 12 * ig.system.scale);
    }
});

});
