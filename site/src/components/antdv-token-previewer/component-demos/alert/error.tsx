import { defineComponent } from 'vue';
import { Alert, Space } from '@kaoniqiwa/trina-ui';
import type { ComponentDemo } from '../../interface';

const Demo = defineComponent({
  setup() {
    return () => (
      <Space direction={'vertical'}>
        <Alert message="Error" type="error" showIcon />

        <Alert
          message="Error"
          description="This is an error message about copywriting."
          type="error"
          showIcon
        />
      </Space>
    );
  },
});

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: ['colorErrorBg', 'colorErrorBorder', 'colorError'],
  key: 'error',
};

export default componentDemo;
