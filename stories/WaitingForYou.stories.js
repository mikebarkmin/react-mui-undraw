
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WaitingForYou from '../src/WaitingForYou';

export default {
  title: 'WaitingForYou',
  component: WaitingForYou,
};

export const Primary = () => <WaitingForYou color="primary" />;
export const Secondary = () => <WaitingForYou color="secondary" />;
export const Color = () => <WaitingForYou color={color('color', '#00FF00')} />;
    