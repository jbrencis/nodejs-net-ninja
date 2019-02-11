const events = require('events');
// const util = require('util');

const myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', msg => console.log(msg));
// emitting 'someEvent' with `msg` argument
// myEmitter.emit('someEvent', 'the event was emitted');

/************************** util ************************** 
// ***************************************************************/

// `Person` will inherit `events.EventEmitter`
class Person extends events.EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

const jane = new Person('jane');
const peter = new Person('peter');
const mark = new Person('mark');
const people = [jane, peter, mark];

// old style (using `util`)
// `Person` will inherit `events.EventEmitter`
// util.inherits(Person, events.EventEmitter);

people.forEach(person => {
  person.on('speak', msg => {
    console.log(`${person.name} said: ${msg}`);
  });
});

jane.emit('speak', 'hey dudes!');
