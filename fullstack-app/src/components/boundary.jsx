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
    if (!this._isMounted) {
      console.log('isMounted');
      return;
    }

    error ??= new Error('Unknown Error');

    reportError(error);

    this.setState({ error, isLoading: false });
  }

  render() {
    const { error, isLoading } = this.state;

    if (isLoading) return <LoadingArea />;

    if (error) {
      return <div>{error}</div>;
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
