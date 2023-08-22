import React, {createContext, useContext, useState} from 'react';

// ImageContext의 값은 [값, 업데이터 함수] 타입을 지닙니다.
// useState를 통해 반환된 값을 그대로 ImageContext에 담겠습니다.

const ImageContext = createContext(null);

export function ImageContextProvider({children}) {
  const imageState = useState("");
  return (
    <ImageContext.Provider value={imageState}>{children}</ImageContext.Provider>
  );
}

// Context를 추후 더 편하게 사용할 수 있도록 만든 Hook 입니다.
export function useImageState() {
  const imageState = useContext(ImageContext);
  if (!imageState) {
    throw new Error('ImageContext is not used');
  }
  return imageState;
}