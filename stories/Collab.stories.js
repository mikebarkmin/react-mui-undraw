
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Collab from '../src/Collab';

export default {
  title: 'Collab',
  component: Collab,
};

export const Primary = () => <Collab color="primary" />;
export const Secondary = () => <Collab color="secondary" />;
export const Color = () => <Collab color={color('color', '#00FF00')} />;
    