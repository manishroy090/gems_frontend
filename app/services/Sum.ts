import { HospitalApi } from "@libs/axios";

export async function getTotalUseraccoringToType() {
  return HospitalApi.get("/auth/user/total")
    .then((res) => {
         return res.data;
    })
    .catch((error) => {
      console.log("error", error);
    });
}
