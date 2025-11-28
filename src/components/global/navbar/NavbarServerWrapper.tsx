import { fetchMenuTree } from "@/actions/menu.actions";
import Navbar from "./navbar";

export default async function NavbarServerWrapper() {
    const menuList = await fetchMenuTree();

    const mainMenu = menuList.find(menu => menu.name.toLowerCase() === "main menu");
    if (!mainMenu) return null;

    return <Navbar items={mainMenu.items || []} />;
}