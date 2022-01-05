import { getSession } from '@auth0/nextjs-auth0';

import { getUserByEmail, createShortLink } from '../../libs/db';

export default async (req, res) => {
  const { user } = await getSession(req, res);
  const { url } = req.body;
  const shortUrl = Math.random().toString(36).substr(2, 7);

  try {
    const dbUser = await getUserByEmail(user.email);
    const data = await createShortLink(url, shortUrl, dbUser.id);

    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: err.message });
  }
};
