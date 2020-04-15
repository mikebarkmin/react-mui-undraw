
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WinterDesigner from '../src/WinterDesigner';

export default {
  title: 'WinterDesigner',
  component: WinterDesigner,
};

export const Primary = () => <WinterDesigner color="primary" />;
export const Secondary = () => <WinterDesigner color="secondary" />;
export const Color = () => <WinterDesigner color={color('color', '#00FF00')} />;
    