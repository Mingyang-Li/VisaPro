import React from 'react';

const loadingImg =
  'https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg';

interface ILoadingSpinner {
  show: boolean;
  text?: string;
}

const LoadingSpinner: React.FC<ILoadingSpinner> = (props: ILoadingSpinner) => (
  <div
    className="spinner"
    style={{
      display: props.show ? 'flex' : 'none',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      verticalAlign: 'baseline',
      height: '100%',
    }}
  >
    <img
      src={loadingImg}
      alt="Loading..."
      style={{ top: '30%', left: '45%' }}
    />
    <p>{props.text ?? 'Loading...'}</p>
  </div>
);

export default LoadingSpinner;
