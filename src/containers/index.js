import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectReddit, invalidateReddit } from '../actions'
import MyPage from '../Pages/MyPage/MyPage';

function mapStateToProps(state) {
  return { state }
}

export default connect(mapStateToProps)(MyPage)