import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://portfolio.local',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default {
    async sendMail(params) {
        try {
            const response = await instance.post('/contact/send-mail', params);
            return response.data;
        } catch (error) {
            return error.data;
        }
    },
    async reCaptcha(params) {
        try {
            const response = await instance.post('/contact/captcha', params);
            return response.data;
        } catch (error) {
            return error.data;
        }
    }
}
