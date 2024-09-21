import { END_POINTS } from "@/constants/api";
import { PutUserRequest } from "@/types/api/putUser";

import { axiosClient } from "../axiosClient";

const putUser = async ({ id, email, password }: PutUserRequest) => {
  await axiosClient.put(END_POINTS.REGISTER, {
    id,
    email,
    password,
  });
};

export default putUser;
