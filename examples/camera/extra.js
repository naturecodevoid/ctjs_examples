// If set to a value between 0 and 1, it will make camera movement smoother
ct.camera.drift = 0.1;

// These displace the camera in UI units, but do not change ct.camera.x or ct.camera.y
ct.camera.shiftX = 1;
ct.camera.shiftY = 1;

// Realigns all the copies in a room based on new dimensions of a camera
// (In context of a Room's onCreate)
ct.camera.realign(this);

// This will align all non-UI layers in the game according to the camera's transforms
// This is automatically called internally, and you will hardly ever use it
ct.camera.manageStage();

// You can create a new camera object for your needs by calling a Camera constructor
const oldCamera = ct.camera;
ct.camera = new Camera(0, 0, 1024, 768);
