import React from 'reactn';

export default class GlobalErrorBoundary extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = 
      { 
          hasError: false,
          error: null
        };
    }
  
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { 
            hasError: true,
            error
        };
    }
  
    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
        console.log(error);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }