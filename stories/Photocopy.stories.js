
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Photocopy from '../src/Photocopy';

export default {
  title: 'Photocopy',
  component: Photocopy,
};

export const Primary = () => <Photocopy color="primary" />;
export const Secondary = () => <Photocopy color="secondary" />;
export const Color = () => <Photocopy color={color('color', '#00FF00')} />;
    