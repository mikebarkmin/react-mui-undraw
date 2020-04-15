
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CreativeWoman from '../src/CreativeWoman';

export default {
  title: 'CreativeWoman',
  component: CreativeWoman,
};

export const Primary = () => <CreativeWoman color="primary" />;
export const Secondary = () => <CreativeWoman color="secondary" />;
export const Color = () => <CreativeWoman color={color('color', '#00FF00')} />;
    