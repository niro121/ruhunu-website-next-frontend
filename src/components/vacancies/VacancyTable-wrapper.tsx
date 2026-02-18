import { getAllVacancies } from "@/actions/vacancy.action";
import VacancyTable from "./VacancyTable";

export default async function VacancyTableWrapper() {
  const vacancies = await getAllVacancies();

  return <VacancyTable data={vacancies} />;
}