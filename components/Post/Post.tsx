import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import Image from 'next/image';

import styles from './Post.module.scss';

const Post = () => {
  return (
    <Paper className="p-20" classes={{ root: styles.postBlock }}>
      <Typography variant="h5" className={styles.title}>
        Сбер запустил сервис для выдачи денег в долг для друзей и знакомых
      </Typography>
      <Typography className={styles.description}>
        О долге в 1000 рублей теперь напомнит приложение Сбербанка, а
        пользователь сможет отслеживать возврат денег.
      </Typography>
      <div>
        <Image
          src="https://leonardo.osnova.io/2b2bd850-aaaf-57b4-9be4-3bfe66b24f7f/-/preview/300/-/format/webp/"
          alt="article"
          width={600}
          height={600}
          objectFit="contain"
        />
      </div>
    </Paper>
  );
};

export default Post;
