import type { SelectProps } from '@kaoniqiwa/trina-ui';

const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
  options.push({ value: i.toString(36) + i, label: i.toString(36) + i });
}

export default options;
