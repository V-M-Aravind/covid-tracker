import { Button } from '@mui/material';
import styles from './RetryComponent.module.css';

const RetryComponent = ({ retryMessage, onRetry = null }) => {
  return (
    <div className={styles.container}>
      <p>{retryMessage}</p>
      {onRetry && (
        <Button
          variant='contained'
          type='submit'
          size='large'
          onClick={onRetry}
        >
          Retry
        </Button>
      )}
    </div>
  );
};

export default RetryComponent;
