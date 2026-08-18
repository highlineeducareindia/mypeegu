const HIGH_RISK_PATTERNS = [
  /suicid/i,
  /kill myself/i,
  /killing myself/i,
  /want to die/i,
  /wanna die/i,
  /end my life/i,
  /ending it all/i,
  /self[- ]?harm/i,
  /cut myself/i,
  /hurt myself/i,
  /don't want to live/i,
  /dont want to live/i,
  /no reason to live/i,
  /\brape[d]?\b/i,
  /molest/i,
  /sexually abused/i,
  /being abused/i,
  /want to disappear forever/i,
];

export const isHighRiskMessage = (text = "") =>
  HIGH_RISK_PATTERNS.some((pattern) => pattern.test(text));
