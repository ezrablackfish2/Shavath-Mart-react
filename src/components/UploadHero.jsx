import React, { FC } from 'react';
import UploadHeroForm from './UploadHeroForm.jsx';
import { uploadData } from './apiHero.jsx';
import styles from '../components/Upload.module.css';

interface UploadHeroPageProps {
	  user: any;
	  token: string;
}

const UploadHeroPage: FC<UploadPageProps> = ({ user, token }) => {
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
		        <h1 className={styles.uploadtitle}>Upload Logo</h1>
		        <UploadHeroForm user={user} token={token} onUpload={handleUpload} />
		      </div>
		    );
};

export default UploadHeroPage;

