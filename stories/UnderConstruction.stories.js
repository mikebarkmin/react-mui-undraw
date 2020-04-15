
import React from 'react';
import { color } from '@storybook/addon-knobs';
import UnderConstruction from '../src/UnderConstruction';

export default {
  title: 'UnderConstruction',
  component: UnderConstruction,
};

export const Primary = () => <UnderConstruction color="primary" />;
export const Secondary = () => <UnderConstruction color="secondary" />;
export const Color = () => <UnderConstruction color={color('color', '#00FF00')} />;
    