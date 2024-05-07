---
id: "Logging"
title: "Interface: Logging<T>"
sidebar_label: "Logging"
sidebar_position: 0
custom_edit_url: null
---

**`Since`**

2.0.0

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Implemented by

- [`DefaultLogging`](../classes/DefaultLogging.md)

## Methods

### debug

▸ **debug**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`LogPayload`](../modules.md#logpayload)<`T`\> |

#### Returns

`void`

#### Defined in

[src/core/contracts/logging.ts:8](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/contracts/logging.ts#L8)

___

### error

▸ **error**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`LogPayload`](../modules.md#logpayload)<`T`\> |

#### Returns

`void`

#### Defined in

[src/core/contracts/logging.ts:5](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/contracts/logging.ts#L5)

___

### info

▸ **info**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`LogPayload`](../modules.md#logpayload)<`T`\> |

#### Returns

`void`

#### Defined in

[src/core/contracts/logging.ts:7](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/contracts/logging.ts#L7)

___

### warning

▸ **warning**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`LogPayload`](../modules.md#logpayload)<`T`\> |

#### Returns

`void`

#### Defined in

[src/core/contracts/logging.ts:6](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/contracts/logging.ts#L6)
