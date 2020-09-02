// Manipulate an emitter

// Let's create a shield bubble!
this.shield = ct.emitters.append(this, 'BubbleEffect');

// Later, when we no longer need the shield:
this.shield.stop();
this.shield = null; // Forget about the effect to free memory
