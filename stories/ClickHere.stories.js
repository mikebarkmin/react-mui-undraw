
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ClickHere from '../src/ClickHere';

export default {
  title: 'ClickHere',
  component: ClickHere,
};

export const Primary = () => <ClickHere color="primary" />;
export const Secondary = () => <ClickHere color="secondary" />;
export const Color = () => <ClickHere color={color('color', '#00FF00')} />;
    