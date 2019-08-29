// a reducer takes 2 things

// 1. the action (info about what happened)
// 2. copy of the current state

function posts(state = [], action) {
    console.log("Posts will change");
    console.log(state, action);
    return state;
}

export default posts;