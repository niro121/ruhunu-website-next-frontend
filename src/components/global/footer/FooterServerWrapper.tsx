import { fetchMenuTree } from "@/actions/menu.actions";
import Footer from "./footer";

export default async function FooterServerWrapper() {
    const menuList = await fetchMenuTree();

    const footer = menuList.find(menu => menu.name.toLowerCase() === "footer");
    if (!footer) return null;

    return <Footer items={footer.items || []}/>;
}