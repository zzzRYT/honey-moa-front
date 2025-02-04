import { useLocation } from 'react-router-dom';

export default function Blog() {
  const { pathname } = useLocation();
  const pathArr = pathname.split('/');
  const id = pathArr[pathArr.length - 1];
  return (
    <div>
      <h1>{id}Blog</h1>
    </div>
  );
}
