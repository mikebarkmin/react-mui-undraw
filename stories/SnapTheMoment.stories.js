
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SnapTheMoment from '../src/SnapTheMoment';

export default {
  title: 'SnapTheMoment',
  component: SnapTheMoment,
};

export const Primary = () => <SnapTheMoment color="primary" />;
export const Secondary = () => <SnapTheMoment color="secondary" />;
export const Color = () => <SnapTheMoment color={color('color', '#00FF00')} />;
    