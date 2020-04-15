
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Happy2019 from '../src/Happy2019';

export default {
  title: 'Happy2019',
  component: Happy2019,
};

export const Primary = () => <Happy2019 color="primary" />;
export const Secondary = () => <Happy2019 color="secondary" />;
export const Color = () => <Happy2019 color={color('color', '#00FF00')} />;
    