import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '../types';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;