import React, { useRef } from 'react';

const MyComponent = () => {
  const c1 = useRef(null);
  const c2 = useRef(null);
  const pp = useRef(null);
  const cp = useRef(null);

  const fun = () => {
    if (c1.current.checked) {
      pp.current.type = "text";
    } else {
      pp.current.type = "password";
    }
  };

  const fun1 = () => {
    if (c2.current.checked) {
      cp.current.value = true;
      cp.current.type = "text";
    } else {
      cp.current.value = false;
      cp.current.type = "password";
    }
  };

  const ch = () => {
    if (pp.current.value !== cp.current.value) {
      alert("Password must be the same");
    }
  };

  return (
    <div>
      <input type="checkbox" ref={c1} onChange={fun} id="p1-passwordtag" />
      <input type="checkbox" ref={c2} onChange={fun1} id="p2-passwordtag" />
      <input type="password" ref={pp} />
      <input type="password" ref={cp} onChange={ch} />
    </div>
  );
};

export default MyComponent;
