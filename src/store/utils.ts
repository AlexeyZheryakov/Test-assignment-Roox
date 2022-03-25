export const createAction = (type: string) => ({ type });

export const createActionWithPayload = <T>(type: string, payload: T) => ({ type, payload });

export const errorTextCreator = (error: unknown) => (error instanceof Error ? error.message : 'Неизвестный тип ошибки');

export const sortScheme = (a: string, b: string) => {
  if (a > b) {
    return 1;
  }

  if (a < b) {
    return -1;
  }

  return 0;
};
