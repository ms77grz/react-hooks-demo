import React from 'react';

const HookMouse = () => {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  const logMousePosition = e => {
    console.log('Mouse event');
    setX(e.clientX);
    setY(e.clientY);
  };

  React.useEffect(() => {
    console.log('useEffect called');
    window.addEventListener('mousemove', logMousePosition);
    return () => {
      console.log('Component unmounting code');
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []);

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
};

export default HookMouse;
