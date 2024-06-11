---
editUrl: false
next: false
prev: false
title: "EventType"
---

A bitfield that discriminates event modules

## Example

```ts
export default eventModule({
    //highlight-next-line
    type : EventType.Discord,
    name : 'guildMemberAdd'
    execute(member : GuildMember) {
        console.log(member)
    }
})
```

## Enumeration Members

### Cron

> **Cron**: `3`

#### Source

[src/core/structures/enums.ts:61](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/structures/enums.ts#L61)

***

### Discord

> **Discord**: `0`

The EventType for handling discord events

#### Source

[src/core/structures/enums.ts:51](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/structures/enums.ts#L51)

***

### External

> **External**: `2`

The EventType for handling external events.
Could be for example, `process` events, database events

#### Source

[src/core/structures/enums.ts:60](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/structures/enums.ts#L60)

***

### Sern

> **Sern**: `1`

The EventType for handling sern events

#### Source

[src/core/structures/enums.ts:55](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/structures/enums.ts#L55)