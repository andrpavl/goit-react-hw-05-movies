import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';

const NotFoundPage = () => {
  const location = useLocation();
  const back = useRef(location.state?.from ?? '/');

  return (
    <>
      <BackLink to={back.current}>Go Back</BackLink>
      <h1>
        <b>Sorry, this page is not found...</b>
      </h1>
      <img
        src="https://www.accordhospice.org.uk/getmedia/e567d9d0-bb70-4068-a6ac-bfb2a57144d9/MicrosoftTeams-image-(19).png"
        alt="notFound"
        width="500px"
        height="500px"
      />
    </>
  );
};

export default NotFoundPage;
