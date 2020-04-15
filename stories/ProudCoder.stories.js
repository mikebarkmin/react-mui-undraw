
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ProudCoder from '../src/ProudCoder';

export default {
  title: 'ProudCoder',
  component: ProudCoder,
};

export const Primary = () => <ProudCoder color="primary" />;
export const Secondary = () => <ProudCoder color="secondary" />;
export const Color = () => <ProudCoder color={color('color', '#00FF00')} />;
    