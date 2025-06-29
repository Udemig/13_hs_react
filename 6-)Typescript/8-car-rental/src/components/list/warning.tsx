// HOC - Higher Order Component
// Normal component'lardan farklı olarak ayrıca bir kapanış etiketine sahiptir ve açlış / kapanış etiketi arasında kalan içierği / component'ı children prop'u olarak alır

import type { FC } from "react";

interface Props {
  children: React.ReactNode; // jsx elementi / elementleri (JSX.Element)
}

const Warning: FC<Props> = ({ children }) => {
  return (
    <div className="padding-x max-width">
      <div className="home-error-container">{children}</div>
    </div>
  );
};

export default Warning;
