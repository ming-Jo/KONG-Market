import React, { useState, useEffect } from 'react';
import { MinusCountButton, PlusCountButton } from '@components/button/CountButton';

interface QuantityButtonBoxProps {
  stock: number;
  refCount?: number;
  getProductCount?: (num: number) => void;
}

const QuantityButtonBox = ({ refCount = 0, stock, getProductCount }: QuantityButtonBoxProps) => {
  const [quantity, setQuantity] = useState(refCount || 1);
  const [countUpState, setCountUpState] = useState(stock > 0 && refCount <= stock);

  // 재고(stock) 또는 초기 수량(refCount) 값이 변경될 때 countUpState 업데이트
  useEffect(() => {
    setCountUpState(stock > 0 && quantity < stock);
  }, [stock, quantity]);

  const onCountUp = () => {
    if (!countUpState) return;
    const plusCount = quantity + 1;
    handelCountValue(plusCount);
  };

  const onCountDown = () => {
    const minusCount = quantity <= 1 ? 1 : quantity - 1;
    handelCountValue(minusCount);
  };

  const handelCountValue = (count: number) => {
    setQuantity(count);
    getProductCount?.(count);
  };

  return (
    <div className="grid grid-cols-3 w-[15rem] border b-disabled-gray rounded-lg">
      <MinusCountButton onclick={onCountDown} disabled={quantity <= 1} />
      <span className="text-center text-[1.8rem] leading-[5rem]">{!stock ? 0 : quantity}</span>
      <PlusCountButton onclick={onCountUp} disabled={!countUpState} />
    </div>
  );
};

export default QuantityButtonBox;
