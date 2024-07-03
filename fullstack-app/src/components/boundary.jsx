import { Component, Suspense } from 'react';

import LoadingArea from '#src/components/loading-area.jsx';

const { console } = globalThis;

const reportError = error => console.log(error);

class ErrorBoundary extends Component {
  constructor(...args) {
    super(...args);
    this.state = { error: null, isLoading: false };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  static getDerivedStateFromError() {
    return { isLoading: true };
  }

  async componentDidCatch(error) {
    // if (_fullstackOnError) _fullstackOnError(error);
    // else {
    // let newerVersion;
    // try {
    //   newerVersion = await getNewerVersion();
    // } catch {
    //   error = new Error(errorMessages.connectionFailed);
    // }

    if (!this._isMounted) {
      console.log('isMounted');
      return;
    }

    // if (newerVersion) return location.reload();

    error ??= new Error('Unknown Error');

    // if (error.message !== errorMessages.connectionFailed)
    reportError(error);
    // }

    this.setState({ error, isLoading: false });
  }
  // }

  render() {
    const { error, isLoading } = this.state;

    if (isLoading) return <LoadingArea />;

    if (error) {
      return (
        <div>{error}</div>
        // <FullNotice type='error'>
        //   {version === 'development' ? (
        //     <DevelopmentError error={error} />
        //   ) : (
        //     ourFaultError
        //   )}
        // </FullNotice>
      );
    }

    return this.props.children;
  }
}

const Boundary = ({ children }) => (
  <ErrorBoundary>
    <Suspense fallback={<LoadingArea />}>{children}</Suspense>
  </ErrorBoundary>
);

export default Boundary;
