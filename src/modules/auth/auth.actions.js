export const IS_AUTH = 'IS_AUTH';

export const auth = (value) => {
  return {
    type: IS_AUTH,
    value
  };
};
