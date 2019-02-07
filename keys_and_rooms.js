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

const canVisitAllRooms = function(rooms) {
    // cache the default room you have access to
    const zero = rooms[0];
    // the stack is an array that will store room we need to visit
    let stack = [zero];
    // the visited array will keep track of the rooms we have visited
    let visited = [];
    // set the 0th room as visited
    visited[0] = true;

    // while loop until their are no more rooms in the stack
    while(stack.length > 0) {
        // the current room will be the last item in the stack array
        let curr = stack.pop();
        // use foreach to iterate over the current array
        curr.forEach(el => {
            // if the currently iterated item is not in the visited array, then push the value to the stack
            if (visited[el] !== true) stack.push(rooms[el]);
            // also set it as visited
            visited[el] = true;
        })
    }
    // use the filter function to return an array of elements that are NOT undefined
    visited = visited.filter(room => room != undefined);
    // if the length of the visited array is qual to the rooms array, then we have visted all rooms, return true, else return false
    return visited.length === rooms.length;
};

// returns true
canVisitAllRooms([[1],[2],[3],[]]);

// returns false
canVisitAllRooms([[1,3],[3,0,1],[2],[0]]);

// returns true
canVisitAllRooms([[2],[],[1]]);

// returns true
canVisitAllRooms([[6,7,8],[5,4,9],[],[8],[4],[],[1,9,2,3],[7],[6,5],[2,3,1]]);
