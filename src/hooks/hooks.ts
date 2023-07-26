import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// useSelector의 state는 reducer의 내부 구조를 알지 못하기 때문에 state 타입(RootState)이 정의된 custom useSelector를 만들어서 사용
// TypedUseSelectorHook은 generic type을 받는다.
