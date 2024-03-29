import { getSession } from '@auth0/nextjs-auth0';

import link from '@/models/link';
import user from '@/models/user';

export default async (req, res) => {
  const session = await getSession(req, res);
  if (!session) {
    return res.status(401).send({ error: 'Unauthorized' });
  }
  const { user: loggedUser } = session;
  const { url } = req.body;
  const shortUrl = Math.random().toString(36).substr(2, 7);

  try {
    const dbUser = await user.get(loggedUser.email);
    const data = await link.create(url, shortUrl, dbUser.id);
    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: err.message });
  }
};
