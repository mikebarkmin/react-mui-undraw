
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PleasantSurprise from '../src/PleasantSurprise';

export default {
  title: 'PleasantSurprise',
  component: PleasantSurprise,
};

export const Primary = () => <PleasantSurprise color="primary" />;
export const Secondary = () => <PleasantSurprise color="secondary" />;
export const Color = () => <PleasantSurprise color={color('color', '#00FF00')} />;
    