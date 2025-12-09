import { getAllServices } from "@/actions/services.action";
import Services from "./services-section";

type ServicesWrapperProps = {
    data: any;
}

export default async function ServicesWrapper({data}: ServicesWrapperProps) {
    const services = await getAllServices();

    return <Services data={data} services={services}/>
}