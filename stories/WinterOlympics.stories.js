
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WinterOlympics from '../src/WinterOlympics';

export default {
  title: 'WinterOlympics',
  component: WinterOlympics,
};

export const Primary = () => <WinterOlympics color="primary" />;
export const Secondary = () => <WinterOlympics color="secondary" />;
export const Color = () => <WinterOlympics color={color('color', '#00FF00')} />;
    