import React from 'react';
import LoadingImage from '../../assets/images/loading.gif';
import './styles.scss';
import { connect } from 'react-redux';

function GlobalLoading({ showLoading }) {
  return (
    <div>
      { showLoading && (<div className="global-loading">
      <img src={LoadingImage} alt=""/>
    </div>)
      }
    </div>
    
  );
}

const mapStateToProps = store => {
  return {
    showLoading: store.ui.showLoading
  };
}

export default connect(mapStateToProps, null) (GlobalLoading);