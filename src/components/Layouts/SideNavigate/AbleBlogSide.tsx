import { useTheme } from 'styled-components';
import { Svg } from '../../Svg';
import * as S from './style';
import { Link } from 'react-router-dom';

export default function AbleBlogSideNav() {
  const theme = useTheme();
  return (
    <S.NavWrapper>
      <S.NavItemListContainer>
        <li>
          <S.ItemButton>
            <Svg.LikeIcon size={36} color={theme.button.primary.base} />
          </S.ItemButton>
        </li>
        <li>
          <Link to="/post">
            <S.ItemButton>
              <Svg.WriteIcon size={36} />
            </S.ItemButton>
          </Link>
        </li>
      </S.NavItemListContainer>
    </S.NavWrapper>
  );
}
