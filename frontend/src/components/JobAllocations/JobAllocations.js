import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import AllocationList from '../AllocationList/AllocationList'
import { WATCH_ALLOCS, UNWATCH_ALLOCS, WATCH_NODES, UNWATCH_NODES } from '../../sagas/event'

class JobAllocations extends Component {

  componentWillMount () {
    this.props.dispatch({ type: WATCH_ALLOCS })
    this.props.dispatch({ type: WATCH_NODES })
  }

  componentWillUnmount () {
    this.props.dispatch({ type: UNWATCH_ALLOCS })
    this.props.dispatch({ type: UNWATCH_NODES })
  }

  render () {
    const allocs = this.props.allocations.filter(allocation => allocation.JobID === this.props.params.jobId)

    return (
      <AllocationList
        showJobColumn={ false }
        allocations={ allocs }
        location={ this.props.location }
        nodes={ this.props.nodes }
      />
    )
  }
}

function mapStateToProps ({ allocations, nodes }) {
  return { allocations, nodes }
}

JobAllocations.defaultProps = {
  allocations: [],
  nodes: [],
  params: {},
  location: {}
}

JobAllocations.propTypes = {
  allocations: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired,
  nodes: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(JobAllocations)

