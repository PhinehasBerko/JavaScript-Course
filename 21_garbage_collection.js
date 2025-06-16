// Garbage Collection in JavaScript.

// Memory management in JavaScript is performed automatically 
// and invisibly to us.

// We create primitives, objects, functions… All that takes memory.

// What happens when something is not needed any more? How does the 
// JavaScript engine discover it and clean it up?

// Reachability
// The main concept of memory management in JavaScript is reachability.

// Simply put, “reachable” values are those that are accessible or usable somehow. 
// They are guaranteed to be stored in memory.

// * There's a base set of inherently reachable values, that cannot be deleted
// for obvious reasons.

// For instance: 
// 1. The currently executing function, its local variable and parameters
// 2. Other functions on the current chain of nested calls, their local
// variables and parameters.
// 3. Global variables
// 4. (There are some other internal ones)

// These values are called roots.

// ** Any other value is considered reachable if it's reachable from a root
// by a reference or by a chain of references.

// There's a background process in the JavaScript engine that is called  garbage
// collector. It monitors all objects and removes those that have become
// unreachable.

let user = {
    name : "John"
};

// Here the variable user has a reference in memory but if the value of 
// user is overwritten, the reference is lost.

// For instance
user = null;
console.log(user);

// Now John becomes unreachable. There’s no way to access it, no references to it. 
// Garbage collector will junk the data and free the memory.

// Two references
// Now let’s imagine we copied the reference from user to admin:


// user has a reference to the object
user = {
    name: "John Peter"
  };
  
  let admin = user;

console.log("admin name: ",admin.name)
console.log("user name: ",user.name)

user = null;

console.log("admin name 2nd: ",admin.name)
console.log("user name 2nd: ",user?.name)

// Then the object is still reachable via admin global variable, 
// so it must stay in memory. If we overwrite admin too, then it can be removed.

// Interlined objects

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    }
  }
  
  let family = marry({
    name: "John"
  }, {
    name: "Ann"
  });

console.log("Family: ", family)


delete family.father;
delete family.mother.husband;
console.log("Family: ", family)
console.log("man", family?.woman?.husband)

// Unreachable island

// It is possible that the whole island of interlinked objects becomes 
// unreachable and is removed from the memory.

family = null;

// That’s the concept of how garbage collection works. 
// JavaScript engines apply many optimizations to make it run faster 
// and not introduce any delays into the code execution.

// Some of the optimizations:

// Generational collection – objects are split into two sets: “new ones” and “old ones”. 
// In typical code, many objects have a short life span: they appear, 
// do their job and die fast, so it makes sense to track new objects 
// and clear the memory from them if that’s the case. 

// Incremental collection – if there are many objects, and we try to walk 
// and mark the whole object set at once, it may take some time and introduce
//  visible delays in the execution. So the engine splits the whole set of 
// existing objects into multiple parts. And then clear these parts one 
// after another.

// Idle-time collection – the garbage collector tries to run only while 
// the CPU is idle, to reduce the possible effect on the execution.

// Summary
// The main things to know:

// 1. Garbage collection is performed automatically. We cannot force or prevent it.

// 2. Objects are retained in memory while they are reachable.

// 3. Being referenced is not the same as being reachable (from a root): 
// a pack of interlinked objects can become unreachable as a whole, 
// as we’ve seen in the example above.

// 4. Modern engines implement advanced algorithms of garbage collection.

// A general book “The Garbage Collection Handbook: 
// The Art of Automatic Memory Management” (R. Jones et al) 
// covers some of them.
