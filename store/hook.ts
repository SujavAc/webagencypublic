import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './reducer/rootReducer'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: (arg?: unknown) => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector