
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MaleAvatar from '../src/MaleAvatar';

export default {
  title: 'MaleAvatar',
  component: MaleAvatar,
};

export const Primary = () => <MaleAvatar color="primary" />;
export const Secondary = () => <MaleAvatar color="secondary" />;
export const Color = () => <MaleAvatar color={color('color', '#00FF00')} />;
    