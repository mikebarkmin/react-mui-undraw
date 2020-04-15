
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DesignerGirl from '../src/DesignerGirl';

export default {
  title: 'DesignerGirl',
  component: DesignerGirl,
};

export const Primary = () => <DesignerGirl color="primary" />;
export const Secondary = () => <DesignerGirl color="secondary" />;
export const Color = () => <DesignerGirl color={color('color', '#00FF00')} />;
    