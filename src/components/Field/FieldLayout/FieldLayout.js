import styles from './Field.module.css';
import PropTypes from 'prop-types';

import { Component } from 'react';

export class FieldLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			field: props.field,
		};
		this.handleCellClick = this.handleCellClick.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.field !== this.props.field) {
			this.setState({ field: this.props.field });
		}
	}

	handleCellClick(index) {
		this.props.handleCellClick(index);
	}

	render() {
		const { field } = this.state;
		return <div className={styles.field}>
			{field.map((value, index) => (
				<button key={index}
						className={`${styles.cell} ${value === 'x' ? styles.isX : value === 'o' ? styles.isO : ''}`}
						onClick={() => this.handleCellClick(index)}>{value}</button>
			))}
		</div>;
	}
}

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleCellClicksDraw: PropTypes.func,
};
