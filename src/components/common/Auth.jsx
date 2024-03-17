import { getUser } from 'apis/login';
import { getCookie } from 'cookies/cookies';
import { useEffect } from 'react';
import useAuthStore from 'store/authStore';

const Auth = () => {
  const { userId, login } = useAuthStore();

  useEffect(() => {
    if (!userId) {
      const token = getCookie('token');

      token &&
        getUser().then(({ id, nickname, role }) =>
          login({
            userId: id,
            nickname,
            isReporter: role === 'REPORTER',
          }),
        );
    }
  }, [userId]);

  return null;
};

export default Auth;
