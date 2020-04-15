
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BackHome from '../src/BackHome';

export default {
  title: 'BackHome',
  component: BackHome,
};

export const Primary = () => <BackHome color="primary" />;
export const Secondary = () => <BackHome color="secondary" />;
export const Color = () => <BackHome color={color('color', '#00FF00')} />;
    