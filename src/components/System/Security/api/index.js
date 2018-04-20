import MockApi from './MockApi';
import ServiceApi from './ServiceApi';

const ENV = process.env.NODE_ENV || 'DEVELOPMENT';

export const getApi = () => {
    switch (ENV) {
        case 'production':
            return ServiceApi;
        default:
            return MockApi;
    }
};
