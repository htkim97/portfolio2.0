import { END_POINTS } from "@/constants/api";
import { PostUserLoginRequest } from "@/types/api/postUserLogin";

import { axiosClient } from "../axiosClient";

const postUserLogin = async ({ id, password }: PostUserLoginRequest) => {
  const params = new URLSearchParams();
  params.append("id", id);
  params.append("password", password);

  await axiosClient.post(END_POINTS.LOGIN, params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export default postUserLogin;
