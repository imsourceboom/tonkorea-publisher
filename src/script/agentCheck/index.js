export const osCheck = () => {
  const agent = navigator.userAgent.toLocaleLowerCase();
  // OS 식별
  if (agent.indexOf("windows") >= 0) return "windows";
  else if (agent.indexOf("macintosh") >= 0) return "mac";
  else if (agent.indexOf("android") >= 0) return "android";
  else if (agent.indexOf("iphone") >= 0) return "iPhone";
  else if (agent.indexOf("ipad") >= 0) return "iPad";
  else if (agent.indexOf("ipod") >= 0) return "iPod";
  else return agent;
};

export const browserCheck = () => {
  const agent = navigator.userAgent.toLocaleLowerCase();
  // 브라우저 식별
  if (agent.indexOf("msie 7") >= 0) return "ie";
  else if (agent.indexOf("msie 8") >= 0) return "ie";
  else if (agent.indexOf("msie 9") >= 0) return "ie";
  else if (agent.indexOf("msie 10") >= 0)
    if (agent.indexOf("Touch") >= 0) return "ie";
    else return "ie";
  else if (agent.indexOf("rv:11.0") >= 0) return "ie";
  else if (agent.indexOf("edge/12.0") >= 0) return "edge";
  else if (agent.indexOf("chrome") >= 0) return "chrome";
  else if (agent.indexOf("safari") >= 0) return "safari";
  else if (agent.indexOf("firefox") >= 0) return "firefox";
  else if (agent.indexOf("opera") >= 0) return "opera";
  else return agent;
};

export const iosBrowser = () => {
  const agent = navigator.userAgent.toLocaleLowerCase();

  if (agent.indexOf("kakaotalk") >= 0) return "kakaotalk";
  else if (agent.indexOf("naver") >= 0) return "naver";
  else if (agent.indexOf("crios") >= 0) return "chrome";
  else if (agent.indexOf("safari") >= 0) return "safari";
  else if (agent.indexOf("opt") >= 0) return "opera";
  else return agent;
};
