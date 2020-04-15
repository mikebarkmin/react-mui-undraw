
import React from 'react';
import { color } from '@storybook/addon-knobs';
import InSync from '../src/InSync';

export default {
  title: 'InSync',
  component: InSync,
};

export const Primary = () => <InSync color="primary" />;
export const Secondary = () => <InSync color="secondary" />;
export const Color = () => <InSync color={color('color', '#00FF00')} />;
    