---
order: 6.5
title: CSS Compatible
---

Trina Design Vue supports the last 2 versions of modern browsers. If you need to be compatible with legacy browsers, please perform downgrade processing according to actual needs:

### Compatible adjustment

Trina Design Vue default using CSS-in-JS with `:where` Selector to reduce priority to avoid user additional adjust style cost when updating. If you want to support old browser (or some other CSS framework selector priority conflict like TailwindCSS), you can use `StyleProvider` to adjust this behavior :

```html
// Config `hashPriority` to `high` instead of default `low`, which will remove `:where` wrapper
<template>
  <a-style-provider hash-priority="high">
    <MyApp />
  </a-style-provider>
</template>
```

It will turn `:where` to class selector:

```diff
--  :where(.css-bAMboO).ant-btn {
++  .css-bAMboO.ant-btn {
      color: #fff;
    }
```

Note:

1、After turning off the `:where` downgrade, you may need to manually adjust the priority of some styles.

2、hashPriority not support change, you can reload for new value.

### CSS Logical Properties

To unify LTR and RTL styles, Trina Design Vue uses CSS logical properties. For example, the original `margin-left` is replaced by `margin-inline-start`, so that it is the starting position spacing under both LTR and RTL. If you need to be compatible with older browsers, you can configure `transformers` through the `StyleProvider` of `@ant-design/cssinjs`:

```html
// `transformers` provides a way to transform CSS properties
<template>
  <a-style-provider :transformers="[legacyLogicalPropertiesTransformer]">
    <MyApp />
  </a-style-provider>
</template>

<script lang="ts" setup>
  import { legacyLogicalPropertiesTransformer } from 'trina-design-vue';
</script>
```

When toggled, styles will downgrade CSS logical properties:

```diff
.ant-modal-root {
-- inset: 0;
++ top: 0;
++ right: 0;
++ bottom: 0;
++ left: 0;
}
```
