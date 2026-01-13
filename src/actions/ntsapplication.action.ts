"use server";

import { saveNtsApplication } from "../../services/ntsapplication.service";

export interface SubmitNtsApplicationDTO {
  title: string;
  name: string;
  dobDate: string;
  dobMonth: string;
  dobYear: string;
  age: string;
  gender: string;
  address1: string;
  address2?: string;
  city: string;
  country: string;
  phone: string;
  nic: string;
  email: string;
}

export const submitNtsApplication = async (
  data: SubmitNtsApplicationDTO
) => {
  try {
    // ===== Required validation =====
    if (
      !data.title ||
      !data.name ||
      !data.dobDate ||
      !data.dobMonth ||
      !data.dobYear ||
      !data.age ||
      !data.gender ||
      !data.address1 ||
      !data.city ||
      !data.country ||
      !data.phone ||
      !data.nic ||
      !data.email
    ) {
      return {
        isError: true,
        error: "Please fill all required fields",
        data: null,
      };
    }

    const result = await saveNtsApplication(data);

    return {
      isError: false,
      error: "",
      data: result,
    };
  } catch (error: any) {
    console.error("submitNtsApplication error ==> ", error);

    return {
      isError: true,
      error: "Something went wrong. Please try again.",
      data: null,
    };
  }
};
