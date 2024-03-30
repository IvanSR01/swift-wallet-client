import { Doughnut } from 'react-chartjs-2'
import styles from './Graph.module.scss'
import { useGraph } from './hook/useGraph'
import { IoIosArrowBack } from 'react-icons/io'
const DoughnutGraph = () => {
	const { optionsTwo, onClickNext, onClickPrev, activeMonth } = useGraph()
	return (
		<div className={styles.lineTwo}>
			<div className={styles.heading}>
				<h3>{activeMonth}</h3>
			</div>
			<div className={styles.doug}>
				<Doughnut data={optionsTwo} />
			</div>
			<div className={styles.arrows}>
				<div className={styles.arrowPrev} onClick={() => onClickPrev()}>
					<IoIosArrowBack />
				</div>
				<div className={styles.arrowNext} onClick={() => onClickNext()}>
					<IoIosArrowBack />
				</div>
			</div>
		</div>
	)
}

export default DoughnutGraph
