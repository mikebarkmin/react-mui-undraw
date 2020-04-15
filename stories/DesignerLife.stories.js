
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DesignerLife from '../src/DesignerLife';

export default {
  title: 'DesignerLife',
  component: DesignerLife,
};

export const Primary = () => <DesignerLife color="primary" />;
export const Secondary = () => <DesignerLife color="secondary" />;
export const Color = () => <DesignerLife color={color('color', '#00FF00')} />;
    