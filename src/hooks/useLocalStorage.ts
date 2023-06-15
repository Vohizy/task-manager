type LocalStorageKey = string;

type LocalStorageValue = any;

type LocalStorageState = {
  getValue: (key: LocalStorageKey) => LocalStorageValue | null;
  setValue: (key: LocalStorageKey, value: LocalStorageValue) => void;
};

const useLocalStorage = (): LocalStorageState => {
  /* get the item in the localStorage */
  const getValue = (key: LocalStorageKey): LocalStorageValue | null => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error(
        `Error getting value from Local Storage for key '${key}':`,
        error
      );
      return null;
    }
  };
  /* set new value in localStorage */
  const setValue = (key: LocalStorageKey, value: LocalStorageValue): void => {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(
        `Error setting value in Local Storage for key '${key}':`,
        error
      );
    }
  };

  return { getValue, setValue };
};

export { useLocalStorage };
