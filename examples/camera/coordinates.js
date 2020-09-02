// Set the default camera's X and Y coordinates
ct.camera.x = 10;
ct.camera.y = 12;

// Set the default camera's target X and Y coordinates
ct.camera.targetX = 10;
ct.camera.targetY = 12;

// Set the default camera's computed X and Y coordinates
ct.camera.computedX = 10;
ct.camera.computedY = 12;

// Get location of a side of the camera
ct.camera.left;
ct.camera.right;
ct.camera.top;
ct.camera.bottom;

// Convert a point from one coordinate space to another. These return an array with two elements: x and y coordinates
ct.camera.uiToGameCoord(10, 10);
ct.camera.gameToUiCoord(10, 10);

// Return an array with two elements, x and y coordinates.
// These are in game coordinates, and take rotation and scaling into account
ct.camera.getTopLeftCorner();
ct.camera.getTopRightCorner();
ct.camera.getBottomLeftCorner();
ct.camera.getBottomRightCorner();

// Returns a bounding box of the camera
ct.camera.getBoundingBox();
