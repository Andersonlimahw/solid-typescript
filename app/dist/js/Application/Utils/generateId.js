export const generateId = () => `${new Date().getMilliseconds().toString(36)}-${Math.random().toString(36).slice(2)}`;
