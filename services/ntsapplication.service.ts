import prisma from "@/lib/prisma";
import { SubmitNtsApplicationDTO } from "@/actions/ntsapplication.action";

export const saveNtsApplication = async (
  data: SubmitNtsApplicationDTO
) => {
  // ===== Convert DOB to Date =====
  const dateOfBirth = new Date(
    Number(data.dobYear),
    Number(data.dobMonth) - 1,
    Number(data.dobDate)
  );

  const result = await prisma.ntsApplication.create({
    data: {
      title: data.title,
      full_name: data.name,
      date_of_birth: dateOfBirth,
      age: Number(data.age),
      gender: data.gender,
      address1: data.address1,
      address2: data.address2 || "",
      city: data.city,
      country: data.country,
      phone: data.phone,
      nic: data.nic,
      email: data.email,
      status: 1, // 1 = submitted
      createdAt: new Date(),
    },
  });

  return result;
};
