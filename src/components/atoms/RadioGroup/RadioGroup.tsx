import { useImperativeHandle, useMemo, useRef, forwardRef } from 'react';

import { useForkRef } from '@/hooks/useForkRef';
import { useId } from '@/hooks/useId';
import { useControlled } from '@/hooks/useControlled';
import {
  type IRadioGroupContext,
  RadioGroupContext,
} from './RadioGroupContext';

// https://github.com/mui/material-ui/blob/master/packages/mui-material/src/RadioGroup/RadioGroup.js
// https://github.com/mui/material-ui/blob/master/packages/mui-material/src/RadioGroup/RadioGroup.d.ts

export type IRadioGroupProps = IRadioGroupContext & {
  actions?: React.RefObject<unknown>;
  children?: React.ReactNode;
  defaultValue?: string;
};

export const RadioGroup = forwardRef<HTMLDivElement, IRadioGroupProps>(
  function RadioGroup(props, ref) {
    const {
      actions,
      children,
      onChange,
      value: valueProp,
      defaultValue,
      name: nameProp,
    } = props;

    const hostRef = useRef<HTMLElement>(null);
    const [value, setValue] = useControlled({
      controlled: valueProp,
      default: defaultValue,
      name: 'RadioGroup',
    });

    useImperativeHandle(
      actions,
      () => ({
        focus: () => {
          const input =
            hostRef.current?.querySelector('input:not(:disabled):checked') ??
            hostRef.current?.querySelector('input:not(:disabled)') ??
            undefined;

          if (input) {
            (input as HTMLInputElement).focus();
          }
        },
      }),
      [],
    );

    const handleRef = useForkRef(ref, hostRef);
    const name = useId(nameProp);

    const contextValue = useMemo(
      () =>
        ({
          name,
          onChange(value: string | undefined) {
            setValue(value);
            onChange?.(value);
          },
          value,
        }) satisfies IRadioGroupContext,
      [name, onChange, value, setValue],
    );

    return (
      <div ref={handleRef} role='radiogroup'>
        <RadioGroupContext.Provider value={contextValue}>
          {children}
        </RadioGroupContext.Provider>
      </div>
    );
  },
);
