---
id: "Sern"
title: "Namespace: Sern"
sidebar_label: "Sern"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### init

▸ **init**(`maybeWrapper`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maybeWrapper` | [`Wrapper`](../interfaces/Wrapper.md) \| ``"file"`` |

#### Returns

`void`

**`Since`**

1.0.0

**`Example`**

```ts title="src/index.ts"
Sern.init({
    commands: 'dist/commands',
    events: 'dist/events',
})
```

#### Defined in

[src/sern.ts:26](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/sern.ts#L26)
