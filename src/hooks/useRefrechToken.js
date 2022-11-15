import axios from "../api/axios";
import useAuth from "./useAuth";
export const useRefreshToken = () => {
  const { setAth } = useAuth();
  const refresh = async () => {
    const response = await axios.get("/refech", {
      withCredentials: true
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      return { ...prev, accessToken: response.data.accessToken };
    });
  };
  return refresh;
};
