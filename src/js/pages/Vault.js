import { Link } from 'react-router-dom'

let Vault = () => (
	<article>
		<h2>VAULT</h2>
		<Link to ='/vault/curr01'>
			<section>
				<div>Name Curr</div>
			</section>
		</Link>
		<Link to ='/vault/curr02'>
			<section>
				<div>Name Curr</div>
			</section>
		</Link>
		<Link to ='/vault/curr03'>
			<section>
				<div>Name Curr</div>
			</section>
		</Link>

	</article>
)
export default Vault;