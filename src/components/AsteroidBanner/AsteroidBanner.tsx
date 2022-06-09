import React, {
  Fragment,
  FunctionComponent,
  CSSProperties,
  useState,
  useEffect
} from 'react';

import { acceptCookies, rejectCookies } from './utilities/acceptCookies';
import { checkCookie } from './utilities/checkCookie';

import './AsteroidBanner.scss';
import Modal from './modal/Modal';

/**
 * @component AsteroidBanner
 *
 * @description - No description
 *
 * @memberof components
 * @author Damian Ryan <damian@damianryan.co.uk>
 *
 * @property {string=} id - Optional ID of the cookie banner.
 * @property {string} title - Title of the banner.
 * @property {string=} siteName - Name of the website managed by the cookie banner.
 *
 * @example
 * return {
 *   <AsteroidBanner {...props} />
 * }
 */

const AsteroidBanner: FunctionComponent<AsteroidProps> = ({
  id,
  title,
  cookies,
  buttons,
  legal,
  backgroundColor,
  textColor,
  siteName
}) => {
  const [visible, setVisible] = useState(true);
  const [modal, openModal] = useState(false);

  // Button Props
  const {
    acceptAll,
    rejectAll,
    manageCookies,
    modalSave,
    modalClose,
    readMore,
    readMoreHref
  } = buttons;

  // Legal Props
  const { legalStatement } = legal;

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

  const modalProps = {
    open: modal,
    buttons: buttons,
    openModal: openModal,
    siteName: siteName,
    cookies: cookies,
    legal: legal
  };

  return (
    <Fragment>
      <Modal {...modalProps} />
      {!modal && (
        <div
          id={id ?? undefined}
          className="asteroid container-fluid position-fixed bottom-0 p-4"
          style={bannerStyle}
        >
          <div className="row">
            <div className="col-sm-12 col-md-10 d-flex flex-column justify-content-center">
              <div className="h2 mb-2">{title}</div>
              <p className="mb-2 mb-sm-2">
                {legalStatement}{' '}
                <a href={readMoreHref} target="_blank" rel="noreferrer">
                  {readMore ?? 'Read More'}
                </a>
              </p>
            </div>
            <div className="col-sm-12 col-md-2 d-flex flex-column align-items-center justify-content-center">
              <button
                className="btn btn-secondary w-100"
                onClick={() => acceptCookies(true, true, siteName, setVisible)}
              >
                {acceptAll}
              </button>
              <button
                className="btn btn-outline-secondary mt-2 w-100"
                onClick={() => rejectCookies(siteName, setVisible)}
              >
                {rejectAll}
              </button>
              <button
                className="btn btn-outline-secondary mt-2 w-100"
                onClick={() => openModal(true)}
              >
                {manageCookies}
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export interface ButtonTypes {
  acceptAll: string;
  rejectAll: string;
  manageCookies: string;
  modalSave: string;
  modalClose: string;
  readMore: string;
  readMoreHref: string;
}

export interface LegalTypes {
  legalStatement: string;
  privacyStatement: string;
}

export interface CookiesTypes {
  essential: string;
  functional: string;
  analytics: string;
  otherCookies?: [];
}

export interface AsteroidProps {
  id?: string;
  title: string;
  cookies: CookiesTypes;
  legal: LegalTypes;
  buttons: ButtonTypes;
  backgroundColor?: string;
  textColor?: string;
  buttonTitle?: string;
  siteName?: string;
  style?: CSSProperties;
}

export default AsteroidBanner;
