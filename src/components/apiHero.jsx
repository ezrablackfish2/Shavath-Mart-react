import axios from 'axios';

const apiUrl = 'https://api.shavathmart.com/api/hero/upload';

export const uploadData = async (formData: FormData, token: string) => {
	  try {
		      const headers = {
			            Authorization: `Bearer ${token}`,
			            'Content-Type': 'multipart/form-data',
			          };

		      const response = await axios.post(apiUrl, formData, { headers });
		      return response.data;
		    } catch (error) {
			        throw error;
			      }
};
