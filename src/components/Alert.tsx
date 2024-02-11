import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	onClick: () => void;
}

const Alert = ({ children, onClick }: Props) => {
	return (
		<>
			<div className='alert alert-primary alert-warning alert-dismissible fade show'>
				{children}
				<button
					type='button'
					className='btn-close'
					data-bs-dismiss='alert'
					aria-label='Close'
					onClick={onClick}
				></button>
			</div>
		</>
	);
};

export default Alert;
