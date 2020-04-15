
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DesignerMindset from '../src/DesignerMindset';

export default {
  title: 'DesignerMindset',
  component: DesignerMindset,
};

export const Primary = () => <DesignerMindset color="primary" />;
export const Secondary = () => <DesignerMindset color="secondary" />;
export const Color = () => <DesignerMindset color={color('color', '#00FF00')} />;
    