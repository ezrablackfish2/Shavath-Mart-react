import React, { FC } from 'react';
import UploadForm from './UploadForm.jsx';
import { uploadData } from './api.jsx';
import styles from '../components/Upload.module.css';

interface UploadPageProps {
	  user: any;
	  token: string;
}

const UploadPage: FC<UploadPageProps> = ({ user, token }) => {
	  const handleUpload = async (formData: FormData) => {
		      try {
			            const response = await uploadData(formData, token);
			            console.log('Upload successful!', response);
			          } catch (error) {
					        console.error('Upload failed:', error);
					      }
		    };

	  return (
		      <div className={styles.uploadbody}>
		        <h1 className={styles.uploadtitle}>Upload A Product</h1>
		        <UploadForm user={user} token={token} onUpload={handleUpload} />
		      </div>
		    );
};

export default UploadPage;

