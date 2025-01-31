interface onChangeImageInfoParams<T> {
  setState: React.Dispatch<React.SetStateAction<T>>;
  depth?: string;
}

/**
 *
 * @param setState 사용하는 부분에서 선언하는 setState함수
 * @param depth state의 깊이가 있는 경우 해당 깊이를 입력
 * @returns setState함수를 이용하여 이미지 정보를 변경
 *
 * @description input file에 대한 이벤트 핸들러에 id와, state의 이름을 일치 시켜야 함
 *
 * @example
 *     const [currentProfileInfo, setCurrentProfileInfo] = useState<CurrentProfileInfoType>({
 *      editName: '이재진',
 *      editImage: {} as File,
 *      blobImage: 'images/introImage.jpg',
 *  });
 *
 *  const onChangeMyProfileImage = changeInfo.image<CurrentProfileInfoType>({setState: setCurrentProfileInfo});
 *
 *  return (
 *      <input type="file" id="editImage" onChange={onChangeMyProfileImage} />
 *  )
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function onChangeImageInfo<T extends Record<string, any>>({
  setState,
  depth,
}: onChangeImageInfoParams<T>): React.ChangeEventHandler<HTMLInputElement> {
  return e => {
    const { id, files } = e.target;
    if (!files || files.length === 0) {
      return;
    }
    if (files) {
      setState(prev => {
        if (depth) {
          return {
            ...prev,
            [depth]: {
              ...prev[depth],
              [id]: files[0],
              blobImage: URL.createObjectURL(files[0]),
            },
          };
        }
        return {
          ...prev,
          [id]: files[0],
          blobImage: URL.createObjectURL(files[0]),
        };
      });
    }
  };
}
