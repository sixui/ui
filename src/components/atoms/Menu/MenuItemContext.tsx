import type { Placement } from '@floating-ui/react';
import { createContext } from 'react';

export type IMenuItemContextValue = {
  getItemProps: (
    userProps?: React.HTMLProps<HTMLButtonElement>,
  ) => Record<string, unknown>;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  isOpen: boolean;
  placement?: Placement;
};

const stub = (): never => {
  throw new Error(
    'You forgot to wrap your component in <MenuItemContext.Provider />.',
  );
};

export const MenuItemContext = createContext<IMenuItemContextValue>({
  getItemProps: (userProps) => ({ ...userProps }),
  activeIndex: null,
  setActiveIndex: stub,
  isOpen: false,
  placement: undefined,
});
