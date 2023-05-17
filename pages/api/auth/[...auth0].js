import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';

import user from '@/models/user';

const afterCallback = async (_req, _res, session) => {
  try {
    await user.create({
      name: session.user.name,
      email: session.user.email,
      picture: session.user.picture,
    });
  } catch (error) {
    console.error(error);
  }

  return session;
};

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      res.status(error.status || 500).send(error.message);
    }
  },
});
