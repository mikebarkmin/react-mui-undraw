
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OpenSource from '../src/OpenSource';

export default {
  title: 'OpenSource',
  component: OpenSource,
};

export const Primary = () => <OpenSource color="primary" />;
export const Secondary = () => <OpenSource color="secondary" />;
export const Color = () => <OpenSource color={color('color', '#00FF00')} />;
    