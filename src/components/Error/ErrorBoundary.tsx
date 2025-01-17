/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Fallback from './Fallback';

interface IErrorBoundaryState {
  hasError: boolean;
  key: number;
}

export default class ErrorBoundary extends React.Component<
  any,
  IErrorBoundaryState
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, key: 0 };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // 에러 로깅
    console.error('ErrorBoundary caught an error:', error, info);
  }

  //key값을 바꿔서 강제로 재랜더링시킴
  resetErrorBoundary = () => {
    this.setState(preState => {
      return { hasError: false, key: preState.key + 1 };
    });
  };

  render() {
    if (this.state.hasError) {
      return <Fallback resetErrorBoundary={this.resetErrorBoundary} />;
    }

    return <div key={this.state.key}>{this.props.children}</div>;
  }
}
