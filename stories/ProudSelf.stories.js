
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ProudSelf from '../src/ProudSelf';

export default {
  title: 'ProudSelf',
  component: ProudSelf,
};

export const Primary = () => <ProudSelf color="primary" />;
export const Secondary = () => <ProudSelf color="secondary" />;
export const Color = () => <ProudSelf color={color('color', '#00FF00')} />;
    