import React from 'react';
import Loading from './loading';

export const asyncComponent = loadComponent => (

    class AsyncComponent extends React.Component {
        constructor(...args){
            super(...args);

            this.state = {
                Component: null,
            };

            this.hasLoadedComponent = this.hasLoadedComponent.bind(this);
        }
        componentWillMount() {
            if(this.hasLoadedComponent()){
                return;
            }

            loadComponent()
                .then(module => module.default ? module.default : module)
                .then(Component => {
                    this.setState({
                        Component
                    });
                })
                .catch(error => {
                    throw error;
                })
        }
        hasLoadedComponent() {
            return this.state.Component !== null;
        }
        render(){
            const {
                Component
            } = this.state;

            return (Component) ? <Component {...this.props} /> : <Loading/>;
        }
    }
);
