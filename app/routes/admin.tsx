import { Link } from '@remix-run/react';

export default function Admin() {
  return (
    <div>
      <h1>管理画面</h1>
      <Link to='/'>ユーザー画面へ</Link>
    </div>
  );
}
