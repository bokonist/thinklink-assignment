import React from 'react';

function Footer() {
  return (
    <div>Footer</div>
  );
}
function shouldNotRerender() {
  return true;
}
export default React.memo(Footer, shouldNotRerender);
