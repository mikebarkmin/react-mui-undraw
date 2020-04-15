
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Collection from '../src/Collection';

export default {
  title: 'Collection',
  component: Collection,
};

export const Primary = () => <Collection color="primary" />;
export const Secondary = () => <Collection color="secondary" />;
export const Color = () => <Collection color={color('color', '#00FF00')} />;
    