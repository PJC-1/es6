// There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room.
//
// Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.
//
// Initially, all the rooms start locked (except for room 0).
//
// You can walk back and forth between rooms freely.
//
// Return true if and only if you can enter every room.
//
// Example 1:
//
// Input: [[1],[2],[3],[]]
// Output: true
// Explanation:
// We start in room 0, and pick up key 1.
// We then go to room 1, and pick up key 2.
// We then go to room 2, and pick up key 3.
// We then go to room 3.  Since we were able to go to every room, we return true.
// Example 2:
//
// Input: [[1,3],[3,0,1],[2],[0]]
// Output: false
// Explanation: We can't enter the room with number 2.

var canVisitAllRooms = function(rooms) {
    // object for storage, start out with key 0 by default
    let obj = {
      0: true
    };
    // object to keep track of rooms you were unable to access
    let denied = {};

    // initial loop to iterate through the rooms
    for(let i = 0; i < rooms.length; i++) {
      // check if you have the key to this room
      if(obj.hasOwnProperty(i)) {
        console.log(`Access granted, you have the key for room ${i}`);
        // loop through the nested array, which are the available keys
        for(let j = 0; j < rooms[i].length; j++) {
          // add the found key to the storage object
          obj[rooms[i][j]] = true;
        }
      // if the key of the iterated room does not exists in the storage object,
      // then add the room number to the denied storage object
      } else {
        console.error(`Access denied, you do NOT have the key for room ${i}`);
        // add room number to the denied object
        denied[i] = true;
      }
    }

    // now that you have obtained all possible keys, check all previously denied rooms to see if you have picked up the key
    for(let room in denied) {
      // check if you have the key in the storage object
      if(obj.hasOwnProperty(room)) {
        console.log(`Access granted, now you may enter room ${room}`);
      } else {
        // if you still are denied access this second time around, it means you have not picked up the key for this room, return false
        return false;
      }
    }

    // if you exit the initial loop and secondary loop without return false at any time, then you have accessed every door, return true
    return true;
};

// returns true
canVisitAllRooms([[1],[2],[3],[]]);

// returns false
canVisitAllRooms([[1,3],[3,0,1],[2],[0]]);

// returns true
canVisitAllRooms([[2],[],[1]]);
