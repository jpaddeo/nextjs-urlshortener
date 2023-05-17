import { getSession } from '@auth0/nextjs-auth0';

import user from '@/models/user';
import link from '@/models/link';

export default async (req, res) => {
  const session = await getSession(req, res);
  if (!session) {
    return res.status(401).send({ error: 'Unauthorized' });
  }
  const { user: loggedUser } = session;
  try {
    const dbUser = await user.get(loggedUser.email);
    const links = await link.getByUserId(dbUser.id);
    return res.status(200).json({ links });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: err.message });
  }
};
