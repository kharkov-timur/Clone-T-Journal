import React from 'react';
import { Button } from '@material-ui/core';
import {
  Whatshot as WhatshotIcon,
  List as ListIcon,
  TrendingUp as RatingIcon,
  BookmarkBorderRounded as BookmarkIcon,
  ScheduleRounded as TimeIcon,
} from '@material-ui/icons';

import styles from './LeftSidebar.module.scss';

const LeftSidebar = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Button>
            <WhatshotIcon className="mr-10" />
            Популярное
          </Button>
        </li>
        <li>
          <Button>
            <TimeIcon className="mr-10" />
            Свежее
          </Button>
        </li>
        <li>
          <Button>
            <BookmarkIcon className="mr-10" />
            Закладки
          </Button>
        </li>
        <li>
          <Button>
            <RatingIcon className="mr-10" />
            Рейтинг TJ
          </Button>
        </li>
        <li>
          <Button>
            <ListIcon className="mr-10" />
            Подписки
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
