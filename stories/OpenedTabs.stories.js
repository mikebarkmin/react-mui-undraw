
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OpenedTabs from '../src/OpenedTabs';

export default {
  title: 'OpenedTabs',
  component: OpenedTabs,
};

export const Primary = () => <OpenedTabs color="primary" />;
export const Secondary = () => <OpenedTabs color="secondary" />;
export const Color = () => <OpenedTabs color={color('color', '#00FF00')} />;
    