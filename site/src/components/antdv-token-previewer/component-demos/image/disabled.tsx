import { Image } from '@kaoniqiwa/trina-ui';

import type { ComponentDemo } from '../../interface';

const Demo = () => {
  return <Image width={200} height={200} src="error" placeholder />;
};

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: ['colorBgContainerDisabled'],
  key: 'disabled',
};

export default componentDemo;
