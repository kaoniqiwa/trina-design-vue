import { defineComponent } from 'vue';
import { Badge, Space } from '@kaoniqiwa/trina-ui';
import type { ComponentDemo } from '../../interface';

const Demo = defineComponent({
  setup() {
    return () => (
      <Space size="small">
        <Badge dot status={'processing'} />
        Process
      </Space>
    );
  },
});

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: ['colorPrimary'],
  key: 'progress',
};

export default componentDemo;
