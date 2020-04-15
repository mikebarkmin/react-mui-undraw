
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Processing from '../src/Processing';

export default {
  title: 'Processing',
  component: Processing,
};

export const Primary = () => <Processing color="primary" />;
export const Secondary = () => <Processing color="secondary" />;
export const Color = () => <Processing color={color('color', '#00FF00')} />;
    