import { defineComponent } from 'vue';
import { Tooltip } from '@kaoniqiwa/trina-ui';
import type { ComponentDemo } from '../../interface';

const Demo = defineComponent({
  setup() {
    return () => (
      <div>
        <Tooltip title="prompt text">
          <span>Tooltip will show on mouse enter.</span>
        </Tooltip>
      </div>
    );
  },
});
const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: ['colorBgSpotlight', 'colorTextLightSolid'],
  key: 'default',
};

export default componentDemo;
