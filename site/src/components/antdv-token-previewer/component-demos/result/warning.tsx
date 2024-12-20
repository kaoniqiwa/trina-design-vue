import { defineComponent } from 'vue';
import { Result } from '@kaoniqiwa/trina-ui';

import type { ComponentDemo } from '../../interface';

const Demo = defineComponent({
  setup() {
    return () => <Result status={'warning'} title="Demo示意" subTitle="status 为warning" />;
  },
});

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: ['colorWarning'],
  key: 'warning',
};

export default componentDemo;
