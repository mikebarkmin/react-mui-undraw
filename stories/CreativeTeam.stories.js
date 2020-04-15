
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CreativeTeam from '../src/CreativeTeam';

export default {
  title: 'CreativeTeam',
  component: CreativeTeam,
};

export const Primary = () => <CreativeTeam color="primary" />;
export const Secondary = () => <CreativeTeam color="secondary" />;
export const Color = () => <CreativeTeam color={color('color', '#00FF00')} />;
    