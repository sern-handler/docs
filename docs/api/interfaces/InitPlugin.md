---
id: "InitPlugin"
title: "Interface: InitPlugin<Args>"
sidebar_label: "InitPlugin"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `Args` | extends `any`[] = `any`[] |

## Properties

### execute

• **execute**: (...`args`: `Args`) => [`PluginResult`](../modules.md#pluginresult)

#### Type declaration

▸ (`...args`): [`PluginResult`](../modules.md#pluginresult)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Args` |

##### Returns

[`PluginResult`](../modules.md#pluginresult)

#### Defined in

[src/types/core-plugin.ts:69](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/types/core-plugin.ts#L69)

___

### type

• **type**: [`Init`](../enums/PluginType.md#init)

#### Defined in

[src/types/core-plugin.ts:68](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/types/core-plugin.ts#L68)
