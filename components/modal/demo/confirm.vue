<docs>
---
order: 3
title:
  zh-CN: 确认对话框
  en-US: Confirmation modal dialog
---

## zh-CN

使用 `confirm()` 可以快捷地弹出确认框。

## en-US

To use `confirm()` to show a confirmation modal dialog.

</docs>

<template>
  <a-space wrap>
    <t-button @click="showConfirm">Confirm</t-button>
    <t-button @click="showPromiseConfirm">With promise</t-button>
    <t-button type="dashed" @click="showDeleteConfirm">Delete</t-button>
    <t-button type="dashed" @click="showPropsConfirm">With extra props</t-button>
  </a-space>
</template>
<script lang="ts" setup>
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { createVNode } from 'vue';
import { Modal } from '@kaoniqiwa/trina-ui';
const showConfirm = () => {
  Modal.confirm({
    title: 'Do you Want to delete these items?',
    icon: createVNode(ExclamationCircleOutlined),
    content: createVNode('div', { style: 'color:red;' }, 'Some descriptions'),
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
    class: 'test',
  });
};
const showDeleteConfirm = () => {
  Modal.confirm({
    title: 'Are you sure delete this task?',
    icon: createVNode(ExclamationCircleOutlined),
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};
const showPropsConfirm = () => {
  Modal.confirm({
    title: 'Are you sure delete this task?',
    icon: createVNode(ExclamationCircleOutlined),
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    okButtonProps: {
      disabled: true,
    },
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};

function showPromiseConfirm() {
  Modal.confirm({
    title: 'Do you want to delete these items?',
    icon: createVNode(ExclamationCircleOutlined),
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    async onOk() {
      try {
        return await new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        });
      } catch {
        return console.log('Oops errors!');
      }
    },
    onCancel() {},
  });
}
</script>
