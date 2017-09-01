var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var image;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('einstein', 'assets/pics/ra-einstein.png');
}

function create ()
{
    image = this.add.image(400, 300, 'einstein');

    this.input.events.once('POINTER_DOWN_EVENT', function () {

        console.log('nuked');

        image.destroy();

        image = null;

    });
}

function update ()
{
    if (image)
    {
        image.rotation += 0.01;
    }
}
