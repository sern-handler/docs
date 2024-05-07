---
sidebar_position: 4
---

# First Command

We will dissect a basic command.
If you installed a new project via the cli, This is the `ping` command located in src/commands folder.

:::tip
TLDR: command modules are discord bot commands. There are many types, and each one will correspond to an event from discord. 
For example, CommandType.Slash commands will listen to slash command interactions.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="js" label="JavaScript">

```js 
const { CommandType, commandModule } = require('@sern/handler');

export default commandModule({
	type: CommandType.Both,
	plugins: [],
	description: 'A ping command',
	// alias : [],
	execute: async (ctx, args) => {
		await ctx.reply('Pong 🏓');
	},
})
```
</TabItem>

<TabItem value="ts" label="Typescript">

```ts 
import { commandModule, CommandType } from '@sern/handler';

export default commandModule({
	type: CommandType.Both,
	plugins: [],
	description: 'A ping command',
	// alias : [],
	execute: async (ctx, args) => {
		await ctx.reply({ content: 'Pong 🏓' });
	},
});

```

</TabItem>

</Tabs>


To view what each of these properties mean in depth, visit the [official documentation](https://sern.dev/docs/api/enums/CommandType).
### Types of command modules
Every command module `type` is part of an enum. This field allows type inference for the rest of a module's fields. <br />
All the command types can be found in the [official documentation](https://sern.dev/docs/api/enums/CommandType)!
<p>So, lets say you want to make a command module that listens to modals. </p>

**Note**: Keep in mind you'll need to send a modal with a custom id `dm-me`. This example below is the response to a modal being sent.
<br />

<Tabs>
<TabItem value="js" label="JavaScript">

```javascript
const { CommandType, commandModule } = require('@sern/handler');
exports.default = commandModule({
        name: 'dm-me',
        type: CommandType.Modal,
        async execute (modal) {
            const value = modal.fields.getTextInputValue('message');
            modal.client.users.fetch('182326315813306368').then( u =>
                u.send(value + ` from ${modal.user}`)
            );
            modal.reply( { ephemeral:true, content: 'Sent' })
        }
});
```
</TabItem>

<TabItem value="ts" label="Typescript">

```typescript
import { commandModule, CommandType } from '@sern/handler';
export default commandModule({
        name: 'dm-me',
        type: CommandType.Modal,
        async execute (modal) {
            const value = modal.fields.getTextInputValue('message');
            modal.client.users.fetch('182326315813306368').then( u =>
                u.send(value + ` from ${modal.user}`)
            );
            modal.reply( { ephemeral:true, content: 'Sent' })
        }
});
```

</TabItem>

</Tabs>


Commands are straight forward. Keep in mind, every other property on the commandModule object is
optional **except** the type and execute function.

# Context class
The provided Context class helps with modules of `CommandType.Both` (A mixture of slash / legacy commands).

The Context class is passed into modules with type:
- `CommandType.Both`
- `CommandType.Slash`
- `CommandType.Text`

This data structure helps interop between legacy commands and slash commands with ease.

