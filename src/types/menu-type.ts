export interface MenuItemType {
  id: string;
  title: string;
  url?: string;
  order: number;
  visible: boolean;
  parentId?: string | null;
  children: MenuItemType[];
}

export interface MenuType {
  id: string;
  name: string;
  visibility: boolean;
  order: number;
  items: MenuItemType[];
}
