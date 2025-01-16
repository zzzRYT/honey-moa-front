import { useState } from 'react';
import * as S from './style';
import HoneyCard from './HoneyCard';
import { Svg } from '@/components/Svg';
import { HoneyCardProps } from './type';
import { Link } from 'react-router-dom';

const honeyListMock: HoneyCardProps[] = [
  {
    couple: {
      id: 'abei014221-beigej',
      name: '두근세근 커플',
      profileImage: 'images/introImage.jpg',
    },
    id: 'agae129031-3fkkldaj',
    date: '2025-01-14',
    title: '첫 데이트',
    tags: ['데이트', '첫만남'],
    location: '노원역',
    titleImage: 'images/introImage.jpg',
    content: [
      {
        id: '1',
        type: 'paragraph',
        props: {},
        content: [
          {
            type: 'text',
            text: '첫 데이트는 노원역에서 놀았다!! 엄청나군!',
            styles: {},
          },
        ],
        children: [],
      },
    ],
  },
  {
    couple: {
      id: 'abei014221-beigej',
      name: '두근세근 커플',
      profileImage: 'images/introImage.jpg',
    },
    id: 'agae129032-3fkkldaj',
    date: '2025-02-14',
    title: '발렌타인데이 데이트',
    tags: ['발렌타인데이', '초콜릿'],
    location: '강남역',
    titleImage: 'images/introImage.jpg',
    content: [
      {
        id: '2',
        type: 'paragraph',
        props: {},
        content: [
          {
            type: 'text',
            text: '발렌타인데이에 강남역에서 초콜릿을 나눠 먹었다!',
            styles: {},
          },
        ],
        children: [],
      },
    ],
  },
  {
    couple: {
      id: 'abei014221-beigej',
      name: '두근세근 커플',
      profileImage: 'images/introImage.jpg',
    },
    id: 'agae129033-3fkkldaj',
    date: '2025-03-14',
    title: '화이트데이 데이트',
    tags: ['화이트데이', '사탕'],
    location: '홍대입구',
    titleImage: 'images/introImage.jpg',
    content: [
      {
        id: '3',
        type: 'paragraph',
        props: {},
        content: [
          {
            type: 'text',
            text: '화이트데이에 홍대입구에서 사탕을 나눠 먹었다!',
            styles: {},
          },
        ],
        children: [],
      },
    ],
  },
  {
    couple: {
      id: 'abei014221-beigej',
      name: '두근세근 커플',
      profileImage: 'images/introImage.jpg',
    },
    id: 'agae129034-3fkkldaj',
    date: '2025-04-14',
    title: '봄나들이 데이트',
    tags: ['봄', '나들이'],
    location: '여의도',
    titleImage: 'images/introImage.jpg',
    content: [
      {
        id: '4',
        type: 'paragraph',
        props: {},
        content: [
          {
            type: 'text',
            text: '봄나들이로 여의도에서 벚꽃을 구경했다!',
            styles: {},
          },
        ],
        children: [],
      },
    ],
  },
  {
    couple: {
      id: 'abei014221-beigej',
      name: '두근세근 커플',
      profileImage: 'images/introImage.jpg',
    },
    id: 'agae129035-3fkkldaj',
    date: '2025-05-14',
    title: '피크닉 데이트',
    tags: ['피크닉', '도시락'],
    location: '한강공원',
    titleImage: 'images/introImage.jpg',
    content: [
      {
        id: '5',
        type: 'paragraph',
        props: {},
        content: [
          {
            type: 'text',
            text: '한강공원에서 피크닉을 즐기며 도시락을 먹었다!',
            styles: {},
          },
        ],
        children: [],
      },
    ],
  },
  {
    couple: {
      id: 'abei014221-beigej',
      name: '두근세근 커플',
      profileImage: 'images/introImage.jpg',
    },
    id: 'agae129036-3fkkldaj',
    date: '2025-06-14',
    title: '여름휴가 데이트',
    tags: ['여름휴가', '바다'],
    location: '해운대',
    titleImage: 'images/introImage.jpg',
    content: [
      {
        id: '6',
        type: 'paragraph',
        props: {},
        content: [
          {
            type: 'text',
            text: '해운대에서 여름휴가를 즐기며 바다에서 놀았다!',
            styles: {},
          },
        ],
        children: [],
      },
    ],
  },
  {
    couple: {
      id: 'abei014221-beigej',
      name: '두근세근 커플',
      profileImage: 'images/introImage.jpg',
    },
    id: 'agae129037-3fkkldaj',
    date: '2025-07-14',
    title: '여름축제 데이트',
    tags: ['여름축제', '불꽃놀이'],
    location: '잠실',
    titleImage: 'images/introImage.jpg',
    content: [
      {
        id: '7',
        type: 'paragraph',
        props: {},
        content: [
          {
            type: 'text',
            text: '잠실에서 여름축제를 즐기며 불꽃놀이를 구경했다!',
            styles: {},
          },
        ],
        children: [],
      },
    ],
  },
  {
    couple: {
      id: 'abei014221-beigej',
      name: '두근세근 커플',
      profileImage: 'images/introImage.jpg',
    },
    id: 'agae129038-3fkkldaj',
    date: '2025-08-14',
    title: '여름밤 데이트',
    tags: ['여름밤', '산책'],
    location: '남산',
    titleImage: 'images/introImage.jpg',
    content: [
      {
        id: '8',
        type: 'paragraph',
        props: {},
        content: [
          {
            type: 'text',
            text: '남산에서 여름밤 산책을 즐겼다!',
            styles: {},
          },
        ],
        children: [],
      },
    ],
  },
  {
    couple: {
      id: 'abei014221-beigej',
      name: '두근세근 커플',
      profileImage: 'images/introImage.jpg',
    },
    id: 'agae129039-3fkkldaj',
    date: '2025-09-14',
    title: '가을소풍 데이트',
    tags: ['가을소풍', '단풍'],
    location: '북한산',
    titleImage: 'images/introImage.jpg',
    content: [
      {
        id: '9',
        type: 'paragraph',
        props: {},
        content: [
          {
            type: 'text',
            text: '북한산에서 가을소풍을 즐기며 단풍을 구경했다!',
            styles: {},
          },
        ],
        children: [],
      },
    ],
  },
  {
    couple: {
      id: 'abei014221-beigej',
      name: '두근세근 커플',
      profileImage: 'images/introImage.jpg',
    },
    id: 'agae129040-3fkkldaj',
    date: '2025-10-14',
    title: '할로윈 데이트',
    tags: ['할로윈', '코스튬'],
    location: '이태원',
    titleImage: 'images/introImage.jpg',
    content: [
      {
        id: '10',
        type: 'paragraph',
        props: {},
        content: [
          {
            type: 'text',
            text: '이태원에서 할로윈 코스튬을 입고 즐겼다!',
            styles: {},
          },
        ],
        children: [],
      },
    ],
  },
];

export default function HoneyList() {
  const [nowMonth, setNowMonth] = useState<number>(new Date().getMonth() + 1);

  /**
   * 달 클릭시 변경
   * 추후 url에 해당 값을 저장하는 로직 추가 필요
   */
  const onClickMonth = (month: number) => {
    setNowMonth(month);
  };
  return (
    <S.HoneyListWrapper>
      <S.HoneyListHeader>
        <select>
          <option>비공개 글</option>
          <option>공개 글</option>
        </select>
        <div>
          <button>
            <Svg.PrevIcon />
          </button>
          <span>{2024}년의 달콤한 기록</span>
          <button>
            <Svg.NextIcon />
          </button>
        </div>
      </S.HoneyListHeader>
      <S.HoneyListMonthsContainer>
        <S.HoneyListMonths>
          {Array.from({ length: 12 })
            .map((_, index) => index + 1)
            .map(month => {
              return (
                <S.HoneyMonthItem
                  onClick={() => onClickMonth(month)}
                  $isNowMonth={nowMonth === month}
                  key={`${month}월`}
                >
                  {month}월
                </S.HoneyMonthItem>
              );
            })}
        </S.HoneyListMonths>
      </S.HoneyListMonthsContainer>
      <div>
        <h3>{12}월</h3>
        <S.HoneyCardGridContainer>
          {honeyListMock.map(honey => {
            return (
              <Link to={`/honey/${honey.id}`} key={honey.id}>
                <HoneyCard {...honey} />
              </Link>
            );
          })}
        </S.HoneyCardGridContainer>
      </div>
    </S.HoneyListWrapper>
  );
}
