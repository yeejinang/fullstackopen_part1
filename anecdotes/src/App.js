import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const handleClick = () => {
	const rand = Math.floor(Math.random() * anecdotes.length);
	setSelected(rand);
  }

  const handleVote = (e, selected) => {
	const update = [...points]
	update[selected]++
	setPoints(update)
  }

  const mostVoteQuote = () => {
  	const max = Math.max(...points);

	if (max === 0)
		return null;

	const index = points.indexOf(max);

	return (
		<div>
			<p>{anecdotes[index]}</p>
			<p>has {max} votes</p>
		</div>
	)
  }

  return (
    <div>
		<h1>Anecdote of the day</h1>
		<p>{anecdotes[selected]}</p>
		<p>has {points[selected]} votes</p>
		<button onClick={e => handleVote(e, selected)}>vote</button>
		<button onClick={handleClick}>next anecdote</button>
		<h1>Anecdote with most votes</h1>
		{mostVoteQuote()}
    </div>
  )
}

export default App
