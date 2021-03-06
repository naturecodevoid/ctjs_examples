// Make the camera follow a Copy
// Example: In context of a Type's onStep
ct.camera.follow = this;

// Works if ct.follow is set to a copy.
// Setting one of these to false will disable automatic camera in a given direction
ct.camera.followX = false;
ct.camera.followY = false;

// Works if ct.follow is set to a copy.
// Sets the frame inside which the copy will be kept, in game pixels
// Can be set to null so the copy is set to the center of the screen
ct.camera.borderX = null;
ct.camera.Y = null;
