import { useState } from 'react';
import styles from './ChatFeedback.module.scss';

interface ChatFeedbackProps {
  messageId: string;
  onFeedbackSubmit: (messageId: string, rating: 'positive' | 'negative', comment?: string) => void;
  styling?: {
    widgetColor?: string;
    textColor?: string;
  };
}

export const ChatFeedback = ({
  messageId,
  onFeedbackSubmit,
  styling = {},
}: ChatFeedbackProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [rating, setRating] = useState<'positive' | 'negative' | null>(null);
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleRating = (newRating: 'positive' | 'negative') => {
    setRating(newRating);
    setIsExpanded(true);
    
    // If user doesn't want to leave a comment, submit immediately
    if (newRating === 'positive') {
      onFeedbackSubmit(messageId, newRating);
      setIsSubmitted(true);
    }
  };
  
  const handleSubmit = () => {
    if (rating) {
      onFeedbackSubmit(messageId, rating, comment);
      setIsSubmitted(true);
      setIsExpanded(false);
    }
  };
  
  return (
    <div className={styles.feedbackContainer}>
      {!isExpanded ? (
        <div className={styles.ratingButtons}>
          <span className={styles.feedbackLabel}>Was this helpful?</span>
          <button
            className={styles.ratingButton}
            onClick={() => handleRating('positive')}
            aria-label="Thumbs up"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
          </button>
          <button
            className={styles.ratingButton}
            onClick={() => handleRating('negative')}
            aria-label="Thumbs down"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"></path>
            </svg>
          </button>
        </div>
      ) : (
        <div className={styles.feedbackForm}>
          <textarea
            placeholder="How can we improve this response?"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
          />
          <button 
            onClick={handleSubmit}
            style={{
              backgroundColor: styling.widgetColor || '#4f46e5',
            }}
          >
            Submit Feedback
          </button>
        </div>
      )}
      
      {isSubmitted && !isExpanded && (
        <div className={styles.feedbackThanks}>
          Thanks for your feedback!
        </div>
      )}
    </div>
  );
}; 