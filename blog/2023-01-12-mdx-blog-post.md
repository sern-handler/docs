---
slug: 2.5.0
title: Release 2.5.0
authors: [jacoobes]
tags: [release]
---

## 2.5 Release

### Join our [discord](https://sern.dev/discord) <br />
- Thank you for using sern in your projects. It's only going to get better!
- I apologize for the sudden small breaking change. After this update, there won't be any for a while.
Wow! We're increasing our semantic versioning by `+0.3.9` <br />
What does this mean?
### Breaking changes
- [controller](../docs/api/modules#controller) parameter for plugins has been removed
    - You'll need to import it instead
    - This **breaks** old [CommandPlugin](../docs/api/interfaces/CommandPlugin), but **not** old [EventPlugin](../docs/api/interfaces/EventPlugin)
### Deprecations
- [CommandPlugin](../docs/api/interfaces/CommandPlugin) and [EventPlugin](../docs/api/interfaces/EventPlugin) have been renamed [InitPlugin](../docs/api/interfaces/InitPlugin) and [ControlPlugin](../docs/api/interfaces/ControlPlugin)

### Reason
- The naming of plugins was getting too complex. For example, plugin naming evolved into CommandModuleCommandPlugin, CommandModuleEventPlugin and more.
- I realize that this affects all plugins. I have updated all [plugins](https://github.com/sern-handler/awesome-plugins/pull/68) to match these changes
- The old way of declaring plugins has been deprecated in favor of newer functions that facilitate and ease typings
  - [CommandControlPlugin](../docs/api/modules#commandcontrolplugin)
  - [CommandInitPlugin](../docs/api/modules#commandinitplugin)
  - [EventControlPlugin](../docs/api/modules#eventcontrolplugin)
  - [EventInitPlugin](../docs/api/modules#eventinitplugin)
  - [DiscordEventControlPlugin](../docs/api/modules#discordeventcontrolplugin)
 This will probably be the last breaking change in a while. Thanks for using sern!