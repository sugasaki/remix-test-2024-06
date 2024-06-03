import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <h1>ユーザー画面</h1>
      <Link to="/admin">管理画面へ</Link>
    </div>
  );
}
