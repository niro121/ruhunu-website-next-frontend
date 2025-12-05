import { getAllBranchs } from "@/actions/branch.action";
import BranchArray from "./BranchArray";

export default async function BranchArrayWrapper() {
    const hospitalData = await getAllBranchs();

    console.log({hospitalData})

    return <BranchArray hospitalData={hospitalData}/>

}