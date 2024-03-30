import { options } from '@/shared/var/graph.options'
import { Line } from 'react-chartjs-2'
import styles from './Graph.module.scss'
import { useGraph } from './hook/useGraph'

const Graph = () => {
	const { balance } = useGraph()
	return (
		<div>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<Line options={options} data={balance as any} className={styles.line} />
				</div>
			</div>
		</div>
	)
}

export default Graph
