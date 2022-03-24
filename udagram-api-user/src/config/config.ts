
export const config = {
  'username': process.env.POSTGRES_USERNAME,
  'password': process.env.POSTGRES_PASSWORD,
  'database': process.env.POSTGRES_DB,
  'host': process.env.POSTGRES_HOST,
  'dialect': 'postgres',
  'url': process.env.URL,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};

/*
export const config = {
  'username': "udagram_master",
  'password': "udagrampassword",
  'database': "database-udagram",
  'host': "database-udagram.cnemwvldkks7.us-east-1.rds.amazonaws.com",
  'dialect': 'postgres',
  'url': process.env.URL,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};*/
