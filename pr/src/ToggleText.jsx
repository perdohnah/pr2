import {useState} from 'react';

export const ToggleText = () => {
  const [isTextVisible, setIsTextVisible] = useState(true);

  const toggleVisibility = () => {
    setIsTextVisible((prev) => !prev);
  };

  return (
      <div>
        {isTextVisible && <p>Hello, React!</p>}
        <button onClick={toggleVisibility}>
          {isTextVisible ? 'Скрити текст' : 'Показати текст'}
        </button>
      </div>
  );
};