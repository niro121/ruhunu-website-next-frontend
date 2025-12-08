"use server";

import { MenuItemType, MenuType } from "@/types/menu-type";
import { getMenus } from "../../services/menu.service";


// ------------------------------------
// 🔥 Tree Builder should be placed HERE
// ------------------------------------
function buildMenuTree(items: any[]): MenuItemType[] {
  const map = new Map<string, MenuItemType>();

  // Convert flat list → map
  items.forEach((item) => {
    map.set(item.id, {
      id: item.id,
      title: item.title,
      url: item.url || undefined,
      order: item.order,
      visible: item.visible,
      parentId: item.parentId,
      children: [],
    });
  });

  const roots: MenuItemType[] = [];

  // Attach children to parents
  items.forEach((item) => {
    if (item.parentId) {
      const parent = map.get(item.parentId);
      if (parent) parent.children.push(map.get(item.id)!);
    } else {
      roots.push(map.get(item.id)!);
    }
  });

  return roots.sort((a, b) => a.order - b.order);
}

// ---------------------------------------------------
// 🔽 Your fetch function now uses the tree generator
// ---------------------------------------------------
export async function fetchMenuTree(): Promise<MenuType[]> {
  try {
    const menus = await getMenus();

    if (!menus) return []; // ← Prevent undefined issue

    return menus.map(menu => ({
      id: menu.id,
      name: menu.name,
      visibility: menu.visibility,
      order: menu.order,
      items: buildMenuTree(menu.items),
    }));

  } catch (error) {
    console.error("Menu fetch error:", error);
    return [];
  }
}

