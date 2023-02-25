import { Sidebar } from '../sidebar/sidebar';

interface ILayout {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className='flex'>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};
