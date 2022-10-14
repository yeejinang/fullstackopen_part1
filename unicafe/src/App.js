import { useState } from 'react'

const Button = props => (
	<button onClick={props.handleClick}>
		{props.text}
	</button>
)

const StatisticLine = props => {
	return (
		<tr>
			<td>{props.text}</td>
			<td>{props.value} {props.text === 'positive' && <span>%</span>}</td>
		</tr>
	)
}

const Statistics = props => {
	return (
		<div>
			<h1>statistics</h1>
			{props.all === 0 && <p>No feedback given</p>} 
			{props.all > 0 &&
				<table>
					<tbody>
						<StatisticLine text='good' value={props.good} />
						<StatisticLine text='neutral' value={props.neutral} />
						<StatisticLine text='bad' value={props.bad} />
						<StatisticLine text='all' value={props.all} />
						<StatisticLine text='average' value={(props.good - props.bad) / props.all} />
						<StatisticLine text='positive' value={(props.good / props.all) * 100} />
					</tbody>
				</table>
			}
		</div>
	)
}

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [all, setAll] = useState(0);

	const handleGoodClick = () => {
		setGood(good + 1);
		setAll(all + 1);
	}

	const handleNeutralClick = () => {
		setNeutral(neutral + 1);
		setAll(all + 1);
	}

	const handleBadClick = () => {
		setBad(bad + 1);
		setAll(all + 1);
	}

  	return (
		<div>
			<h1>give feedback</h1>
			<Button handleClick={handleGoodClick} text="good" />
			<Button handleClick={handleNeutralClick} text="neutral" />
			<Button handleClick={handleBadClick} text="bad" />
			<Statistics good={good} neutral={neutral} bad={bad} all={all} />
		</div>
  	)
}

export default App
