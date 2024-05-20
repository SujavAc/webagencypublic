export type Menu = {
  id?: number;
  title: string;
  path?: string;
  newTab: boolean;
  isAuthenticated?: boolean;
  submenu?: Menu[];
  icon?: string
};
