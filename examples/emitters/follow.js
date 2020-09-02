// Spawns effect that follows a Copy
// Example: In context of Type's onStep
ct.emitters.follow(this, 'EffectName');

// Spawns effect that follow a Copy
// Old particles are moved with the emitter
// Example: In context of a Type's onStep
ct.emitters.append(this, 'EffectName');

// Options
ct.emitters.follow(this, 'Debuff', {
    scale: {
        x: 0.75,
        y: 0.75,
    },
    position: {
        x: 0,
        y: -80,
    },
    tint: 0xff9999,
    depth: this.depth,
});
