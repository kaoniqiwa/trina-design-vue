<docs>
---
order: 6
title:
  zh-CN: 自定义样式
  en-US: Customized style
---

## zh-CN

使用 `style` 和 `class` 来定义样式。

## en-US

The `style` and `class` are available to customize Message.

</docs>

<template>
  <t-button @click="success">Customized style</t-button>
</template>
<script lang="ts" setup>
import { message } from '@kaoniqiwa/trina-ui';
const success = () => {
  message.success({
    content: () => 'This is a prompt message with custom className and style',
    class: 'custom-class',
    style: {
      marginTop: '20vh',
    },
  });
};
</script>
<style>
.custom-class {
  color: red;
}
</style>
