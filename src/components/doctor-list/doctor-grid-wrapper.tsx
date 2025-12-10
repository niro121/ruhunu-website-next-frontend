import { fetchMenuTree } from "@/actions/menu.actions";
import DoctorGrid from "./doctorgrid";
import { getAllDoctors } from "@/actions/docter.action";

export default async function DoctorGridrWrapper() {

    console.log("woking 1")

    const doctors = await getAllDoctors();

    if (!doctors) return null;

    return <DoctorGrid doctor={doctors} />;
}