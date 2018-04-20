export function requireMessage(field, message) {
  return `${field}:${message}`;
}

export function getRequireMessage(message) {
  const splitted = message.split(':');
  return {
    field: splitted[0],
    message: splitted[1]
  };
}
