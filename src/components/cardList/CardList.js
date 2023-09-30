import styles from './cardList.module.css';

import Card from '../card/Card';

const posts = [
  {
    image:
      'https://i.pinimg.com/originals/9c/8c/a5/9c8ca502528fedd93c8e0c5bb41701af.jpg',
    tags: ['Golang', 'Javascript'],
    title: 'Title of the post',
    createdAt: '2023-09-23',
    desc: `Khi giành chức vô địch LCK lần đầu tiên sau 5 lần về nhì, Chovy không khóc Khi nhận được FMVP trận chung kết, danh hiệu cá nhân đầu tiên, Chovy không khóc. Nhưng khi nhận được tấm huy chương vàng tại Asiad và quốc ca Hàn Quốc vang lên, Chovy đã rưng rưng nước mắt.`,
  },
];
export default function CardList() {
  return (
    <div className={styles.cards}>
      {posts.map((post, index) => (
        <Card post={post} key={index} />
      ))}
    </div>
  );
}
