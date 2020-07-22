
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HeyByBasecamp from '../src/HeyByBasecamp';

export default {
  title: 'HeyByBasecamp',
  component: HeyByBasecamp,
};

export const Primary = () => <HeyByBasecamp color="primary" />;
export const Secondary = () => <HeyByBasecamp color="secondary" />;
export const Color = () => <HeyByBasecamp color={color('color', '#00FF00')} />;
    