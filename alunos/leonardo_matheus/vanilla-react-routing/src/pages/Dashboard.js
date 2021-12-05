import { onNavigate } from '../utils/onNavigate';

export function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={() => onNavigate('/settings')}>Settings</button>
      <button onClick={() => onNavigate('/profile')}>Profile</button>
    </>
  );
}
