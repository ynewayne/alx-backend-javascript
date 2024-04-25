import ClassRoom from './0-classroom.js';

function initializeRooms() {
    // Create an array to store the ClassRoom objects
    const rooms = [];
    
    // Create three ClassRoom objects with sizes 19, 20, and 34
    rooms.push(new ClassRoom(19));
    rooms.push(new ClassRoom(20));
    rooms.push(new ClassRoom(34));
    
    return rooms;
}

export default initializeRooms;
