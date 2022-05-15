import React, {
  FunctionComponent,
  CSSProperties,
  useState,
  useEffect
} from 'react';

import './AsteroidBanner.scss';

interface AsteroidProps {
  id?: string;
  title: string;
  legalStatement: string;
  readmoreText?: string;
  readMoreLink: string;
  backgroundColor?: string;
  textColor?: string;
  buttonTitle?: string;
  siteName?: string;
}

const AsteroidBanner: FunctionComponent<AsteroidProps> = ({
  id,
  title,
  legalStatement,
  readmoreText,
  readMoreLink,
  backgroundColor,
  textColor,
  buttonTitle,
  siteName
}) => {
  const [visible, setVisible] = useState(true);

  // Accept all cookies
  function acceptCookies(choice: boolean) {
    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + (choice ? 12 : 1));

    const cookieName = `${siteName}Cookie` ?? 'AsteroidCookie';

    const cookieValue = {
      performance: choice,
      essentials: true,
      analytics: choice,
      expires: expiryDate.toUTCString()
    };

    document.cookie = `${cookieName.replace(/\s/g, '')}=${JSON.stringify(
      cookieValue
    )};expires=${expiryDate.toUTCString()};path=/`;
    setVisible(false);
  }

  // Function to read cookie
  function checkCookie(cookieName: string) {
    if (!cookieName && cookieName !== undefined) return null;
    cookieName = encodeURIComponent(cookieName).replace(
      /[.*+?^=!:${}()|[\]\/\\]/g,
      '\\$&'
    ); //escape regexp characters
    const rxp = new RegExp(`(?:^|;)\\s*${cookieName}=([^;]*)`);
    const theCookie = rxp.exec(document.cookie);
    return theCookie ? decodeURIComponent(theCookie[1]) : null;
  }

  // Checks on mount if cookie exists before updating state to false.
  useEffect(() => {
    const cookieName = `${siteName}Cookie` ?? 'AsteroidCookie';

    if (checkCookie(cookieName.replace(/\s/g, ''))) {
      setVisible(false);
    }
  }, [siteName]);

  // Customise banner style
  const bannerStyle: CSSProperties = {
    color: textColor ?? '#000',
    backgroundColor: backgroundColor ?? '#fff',
    visibility: visible ? 'visible' : 'hidden'
  };

  return (
    <div
      id={id ?? undefined}
      className="asteroid container-fluid position-fixed bottom-0 p-4"
      style={bannerStyle}
    >
      <div className="row">
        <div className="col-sm-12 col-md-10 d-flex flex-column justify-content-center">
          <div className="h2 mb-2">{title}</div>
          <p className="mb-sm-1">
            {legalStatement}{' '}
            <a href={readMoreLink} target="_blank" rel="noreferrer">
              {readmoreText ?? 'Read More'}
            </a>
          </p>
        </div>
        <div className="col-sm-12 col-md-2 d-flex flex-column align-items-center justify-content-end">
          <button
            className="btn btn-lg btn-secondary w-100"
            onClick={() => acceptCookies(true)}
          >
            {buttonTitle}
          </button>
          <button
            className="btn btn-lg btn-outline-secondary mt-2 w-100"
            onClick={() => acceptCookies(false)}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default AsteroidBanner;
