class stone {
    constructor(x, y) {
      var options = {
        'density':3,
        'friction': 1,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 120;
    this.height = 30;
    World.add(world, this.body);
    