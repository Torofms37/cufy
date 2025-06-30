import '../../styles/authlayout.css'

export const AuthLayout = ({ title = "" }) => {
  return (
    <div className="auth-layout">
      <h1 className="">{title}</h1>
      <div className='divider'></div>
    </div>
  );
};
