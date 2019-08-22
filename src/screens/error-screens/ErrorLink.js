import React, { Component } from 'react';
import SVGInline from 'react-svg-inline';
import { withRouter } from 'react-router-dom';
//import { connect } from 'react-redux';
import errorSvg from '../../_images/cloud-error.svg';
// import EMButton from '../../shared/EMButton';

class ErrorLink extends Component {

    goToProducts = () => {
        this.props.history.push('/products');
    };

    render() {
        return (
            <div className="screen screen--grey">
                <div className="shopping-cart">
                    <div className="shopping-cart__products">
                        <div className="shopping-cart__products-icon">
                            <SVGInline svg={errorSvg} />
                        </div>
                        <div className="shopping-cart__products-empty-text">
                            <p className="paragraph-text">
                                {this.props.errorMessage}
                            </p>
                        </div>
                        <div className="shopping-cart__products-action">
                            {/* <EMButton onClick={() => this.goToProducts()} label="Continue shopping" className="button button--auto-width button--blue" /> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/*const mapStateToProps = (state) => {
    return {
        errorMessage: state.jobs.placeOrderByKvalueErrorMessage
    };
};

export default withRouter(connect(mapStateToProps, null)(ErrorLink));
*/
export default withRouter(ErrorLink);
