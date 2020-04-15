
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CreativeThinking from '../src/CreativeThinking';

export default {
  title: 'CreativeThinking',
  component: CreativeThinking,
};

export const Primary = () => <CreativeThinking color="primary" />;
export const Secondary = () => <CreativeThinking color="secondary" />;
export const Color = () => <CreativeThinking color={color('color', '#00FF00')} />;
    