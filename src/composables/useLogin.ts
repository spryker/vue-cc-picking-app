import { LoginApiClient, User, UserResult } from "@/api/login";
import { ref } from "vue";

export default function useLogin(user: { value: User }) {
  const loginApi: LoginApiClient = new LoginApiClient();
  const resultUser = ref<UserResult>({
    password: user.value.password,
    token: { accessToken: "", expiresIn: "", refreshToken: "", tokenType: "" },
    username: user.value.username,
  });
  const errorMessage = ref("");
  const userLogin = ref(false);
  const login = async () => {
    const { data, error } = await loginApi.login(user.value);
    if (!error.error) {
      resultUser.value.token = data.token;
      userLogin.value = true;
    } else {
      errorMessage.value = error.error;
    }
  };

  return {
    resultUser: resultUser.value,
    errorMessage: errorMessage.value,
    login,
    userLogin: userLogin.value,
  };
}
