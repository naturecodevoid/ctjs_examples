// The current power of a screen shake effect, relative to the screen's max side (100 is 100% of screen shake).
// If set to 0 or less, it, disables the effect.
ct.camera.shake = 0.1;

// The current phase of screen shake oscillation.
ct.camera.shakePhase;

// The amount of shake units substracted in a second. Default is 5.
ct.camera.shakeDecay = 1;

// The base frequency of the screen shake effect. Default is 50.
ct.camera.shakeFrequency = 20;

// A multiplier applied to the screen shake effect. Default is 1.
ct.camera.shakeX;
ct.camera.shakeY;

// The maximum possible value for the shake property to protect players from losing their monitor.
// In shake units, the default is 10
ct.camera.shakeMax = 5;
