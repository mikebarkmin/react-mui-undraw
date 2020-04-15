
import React from 'react';
import { color } from '@storybook/addon-knobs';
import IconDesign from '../src/IconDesign';

export default {
  title: 'IconDesign',
  component: IconDesign,
};

export const Primary = () => <IconDesign color="primary" />;
export const Secondary = () => <IconDesign color="secondary" />;
export const Color = () => <IconDesign color={color('color', '#00FF00')} />;
    