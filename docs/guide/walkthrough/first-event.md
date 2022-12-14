---
sidebar_position: 4
---

# First Event Module
We will dissect a basic event module. <br />
Typescript:
```typescript
export default eventModule({
  type: EventType.Sern,
  plugins : [], //NOT SUPPORTED YET!!
  name: 'module.activate', //name of event.
  execute(event) {
    console.log(event);  
  }
})
```
Javascript:
```javascript
exports.default = eventModule({
  type: EventType.Sern,
  plugins : [], //NOT SUPPORTED YET!!
  name: 'module.activate',
  execute(event) {
    console.log(event);  
  }
})
```
Like command modules, the `type` property denotes what kind of event it is, which
can be found [here](https://sern.dev/docs/api/enums/EventType).

To view what each of these properties mean in depth, visit the [official documentation](https://sern.dev/docs/api/enums/EventType).

<br />
Event modules are laid out similarly to command modules. These listen to any and all event you provide. 
In the current version 1.1.0-beta, plugins are not supported.

### Another example of an event module

Typescript:
```typescript
export default eventModule({
  type: EventType.Discord,
  plugins : [],
  name: 'guildMemberAdd', //name of event.
  async execute(member: GuildMember) {
    (await member.guild.channels.fetch('channel-id') as TextChannel).send(`Welcome, ${member}`); 
  }
})
```

Javascript:
```javascript

exports.default = eventModule({
  type: EventType.Discord,
  plugins : [], //NOT SUPPORTED YET!!
  name: 'guildMemberAdd', //name of event.
  async execute(member) {
    (await member.guild.channels.fetch('channel-id')).send(`Welcome, ${member}`); 
  }
})
```
