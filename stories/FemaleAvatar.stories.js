
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FemaleAvatar from '../src/FemaleAvatar';

export default {
  title: 'FemaleAvatar',
  component: FemaleAvatar,
};

export const Primary = () => <FemaleAvatar color="primary" />;
export const Secondary = () => <FemaleAvatar color="secondary" />;
export const Color = () => <FemaleAvatar color={color('color', '#00FF00')} />;
    