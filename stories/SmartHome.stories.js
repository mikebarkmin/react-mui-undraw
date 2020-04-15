
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SmartHome from '../src/SmartHome';

export default {
  title: 'SmartHome',
  component: SmartHome,
};

export const Primary = () => <SmartHome color="primary" />;
export const Secondary = () => <SmartHome color="secondary" />;
export const Color = () => <SmartHome color={color('color', '#00FF00')} />;
    