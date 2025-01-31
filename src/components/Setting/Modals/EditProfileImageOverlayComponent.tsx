import { Svg } from '@/components/Svg';
import * as S from './style';
import { EditProfileImageOverlayComponentProps } from './type';

export default function EditProfileImageOverlayComponent({
  children,
  htmlForId,
  onChange,
}: EditProfileImageOverlayComponentProps) {
  return (
    <S.EditProfileImageOverlay>
      {children}
      <label htmlFor={htmlForId}>
        <Svg.CameraIcon />
      </label>
      <input
        type="file"
        accept="image/*"
        id={htmlForId}
        onChange={onChange}
        hidden
      />
    </S.EditProfileImageOverlay>
  );
}
